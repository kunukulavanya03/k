from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, scoped_session
from sqlalchemy.orm.session import sessionmaker
from app.config import settings

engine = create_engine(settings.DATABASE_URL)
Base = declarative_base()

Session = scoped_session(sessionmaker(bind=engine))
