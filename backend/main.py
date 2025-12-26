from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import get_db, engine
from models import Base, User, Item
from schemas import UserCreate, UserResponse, ItemCreate, ItemResponse
import logging

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="The_K_Project_Aims_To_Provide_A_Scalable_And_Maintainable_Backend_Api_For_A_React-Based_Frontend_Application._The_Api_Will_Be_Built_Using_Fastapi_And_Sqlalchemy,_Providing_A_Robust_And_Efficient_Framework_For_Data_Management_And_Api_Endpoints. API",
    description="Complete backend API",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to The_K_Project_Aims_To_Provide_A_Scalable_And_Maintainable_Backend_Api_For_A_React-Based_Frontend_Application._The_Api_Will_Be_Built_Using_Fastapi_And_Sqlalchemy,_Providing_A_Robust_And_Efficient_Framework_For_Data_Management_And_Api_Endpoints. API", "status": "running"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "the_k_project_aims_to_provide_a_scalable_and_maintainable_backend_api_for_a_react-based_frontend_application._the_api_will_be_built_using_fastapi_and_sqlalchemy,_providing_a_robust_and_efficient_framework_for_data_management_and_api_endpoints."}

@app.post("/users/", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(email=user.email, username=user.username)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/users/", response_model=list[UserResponse])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = db.query(User).offset(skip).limit(limit).all()
    return users

@app.post("/items/", response_model=ItemResponse)
def create_item(item: ItemCreate, db: Session = Depends(get_db)):
    db_item = Item(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

@app.get("/items/", response_model=list[ItemResponse])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = db.query(Item).offset(skip).limit(limit).all()
    return items

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)