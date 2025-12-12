from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.requests import Request
from fastapi.responses import JSONResponse
from fastapi.background import BackgroundTasks
from jose import jwt
from jose.exceptions import JWTError
from passlib.context import CryptContext
from pydantic import BaseModel, BaseSettings
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from app.models import User, UserData
from app.schemas import UserRegister, UserLogin, UserUpdate, UserDataCreate, UserDataUpdate
from app.main import engine, SessionLocal, pwd_context, oauth2_scheme, settings

router = APIRouter(prefix='/api', tags=['users'])

@router.post('/register')
async def register(user: UserRegister):
    db = SessionLocal()
    existing_user = db.query(User).filter(User.username == user.username).first()
    if existing_user:
        raise HTTPException(status_code=400, detail='Username already exists')
    hashed_password = pwd_context.hash(user.password)
    new_user = User(username=user.username, email=user.email, password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.post('/login')
async def login(form_data: UserLogin):
    db = SessionLocal()
    user = db.query(User).filter(User.username == form_data.username).first()
    if not user or not pwd_context.verify(form_data.password, user.password):
        raise HTTPException(status_code=401, detail='Invalid username or password')
    access_token = jwt.encode({'sub': user.username}, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return {'access_token': access_token, 'token_type': 'bearer'}

@router.get('/users')
async def get_users(db: SessionLocal = Depends()):
    users = db.query(User).all()
    return users

@router.get('/users/{user_id}')
async def get_user(user_id: int, db: SessionLocal = Depends()):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail='User not found')
    return user

@router.put('/users/{user_id}')
async def update_user(user_id: int, user: UserUpdate, db: SessionLocal = Depends()):
    existing_user = db.query(User).filter(User.id == user_id).first()
    if not existing_user:
        raise HTTPException(status_code=404, detail='User not found')
    existing_user.username = user.username
    existing_user.email = user.email
    db.commit()
    db.refresh(existing_user)
    return existing_user

@router.delete('/users/{user_id}')
async def delete_user(user_id: int, db: SessionLocal = Depends()):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail='User not found')
    db.delete(user)
    db.commit()
    return {'message': 'User deleted'}
