from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.requests import Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import List
import uvicorn
import json
import os
import sys
import logging

# Initialize the logger
logging.basicConfig(stream=sys.stdout, level=logging.INFO)

# Create the FastAPI app
app = FastAPI()

# Define the CORS policy
origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"], expose_headers=["Content-Range"]
)

# Define the OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Define the user model
class User(BaseModel):
    username: str
    email: str
    password: str

# Define the data model
class Data(BaseModel):
    name: str
    description: str

# Define the database schema
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Create the database engine
engine = create_engine("postgresql://user:password@localhost/dbname")

# Create the configured "Session" class
Session = sessionmaker(bind=engine)

# Create a configured "Base" class
Base = declarative_base()

# Define the user table
class UserTable(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)

# Define the data table
class DataTable(Base):
    __tablename__ = 'data'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    user_id = Column(Integer)

# Create the database tables
Base.metadata.create_all(engine)

# Define the API endpoints
@app.post("/api/register")
async def register(user: User):
    # Create a new user
    new_user = UserTable(username=user.username, email=user.email, password=user.password)
    session = Session()
    session.add(new_user)
    session.commit()
    return JSONResponse(content={"message": "User created successfully"}, status_code=201)

@app.post("/api/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Authenticate the user
    user = session.query(UserTable).filter(UserTable.username == form_data.username).first()
    if not user:
        return JSONResponse(content={"message": "Invalid username or password"}, status_code=401)
    if not user.password == form_data.password:
        return JSONResponse(content={"message": "Invalid username or password"}, status_code=401)
    # Generate the JWT token
    token = "your_jwt_token"
    return JSONResponse(content={"token": token}, status_code=200)

@app.post("/api/password_reset")
async def password_reset(email: str):
    # Send a password reset email
    #... implement password reset logic...
    return JSONResponse(content={"message": "Password reset email sent successfully"}, status_code=200)

@app.get("/api/profile")
async def profile(token: str = Depends(oauth2_scheme)):
    # Retrieve the user profile
    user = session.query(UserTable).filter(UserTable.id == token).first()
    return JSONResponse(content={"username": user.username, "email": user.email}, status_code=200)

@app.put("/api/profile")
async def update_profile(token: str = Depends(oauth2_scheme), user: User):
    # Update the user profile
    session.query(UserTable).filter(UserTable.id == token).update({UserTable.username: user.username, UserTable.email: user.email})
    session.commit()
    return JSONResponse(content={"message": "Profile updated successfully"}, status_code=200)

@app.get("/api/data")
async def get_data(token: str = Depends(oauth2_scheme)):
    # Retrieve the data
    data = session.query(DataTable).filter(DataTable.user_id == token).all()
    return JSONResponse(content=[{"id": d.id, "name": d.name, "description": d.description} for d in data], status_code=200)

@app.post("/api/data")
async def create_data(token: str = Depends(oauth2_scheme), data: Data):
    # Create a new data entry
    new_data = DataTable(name=data.name, description=data.description, user_id=token)
    session.add(new_data)
    session.commit()
    return JSONResponse(content={"id": new_data.id, "name": new_data.name, "description": new_data.description}, status_code=201)

@app.get("/api/data/{id}")
async def get_data_by_id(token: str = Depends(oauth2_scheme), id: int):
    # Retrieve a single data entry by ID
    data = session.query(DataTable).filter(DataTable.id == id).first()
    return JSONResponse(content={"id": data.id, "name": data.name, "description": data.description}, status_code=200)

@app.put("/api/data/{id}")
async def update_data(token: str = Depends(oauth2_scheme), id: int, data: Data):
    # Update a single data entry by ID
    session.query(DataTable).filter(DataTable.id == id).update({DataTable.name: data.name, DataTable.description: data.description})
    session.commit()
    return JSONResponse(content={"message": "Data updated successfully"}, status_code=200)

@app.delete("/api/data/{id}")
async def delete_data(token: str = Depends(oauth2_scheme), id: int):
    # Delete a single data entry by ID
    session.query(DataTable).filter(DataTable.id == id).delete()
    session.commit()
    return JSONResponse(content={"message": "Data deleted successfully"}, status_code=200)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)