# FastAPI Backend

This is a FastAPI backend application with SQLAlchemy for database operations.

## Installation

1. Clone the repository
2. Install dependencies with `pip install -r requirements.txt`
3. Create a `.env` file with the environment variables
4. Run the application with `uvicorn app.main:app --host 0.0.0.0 --port 8000`

## API Endpoints

### Users

* `GET /api/users`: Get all users
* `POST /api/users`: Create new user
* `GET /api/users/{user_id}`: Get user by ID
* `PUT /api/users/{user_id}`: Update user
* `DELETE /api/users/{user_id}`: Delete user

### Data

* `GET /api/data`: Get all data
* `POST /api/data`: Create new data
* `GET /api/data/{data_id}`: Get data by ID
* `PUT /api/data/{data_id}`: Update data
* `DELETE /api/data/{data_id}`: Delete data
