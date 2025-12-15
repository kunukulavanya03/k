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
