from pydantic import BaseModel

class UserRegister(BaseModel):
    username: str
    email: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class UserUpdate(BaseModel):
    username: str
    email: str

class UserDataCreate(BaseModel):
    name: str
    description: str

class UserDataUpdate(BaseModel):
    name: str
    description: str
