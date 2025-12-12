# Backend API

## Overview

This is a backend API built with FastAPI and SQLAlchemy.

## Requirements

* Python 3.9+
* FastAPI 0.104.1+
* SQLAlchemy 2.0.0+
* Pydantic 2.7.4+

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2. Create a virtual environment:
    ```bash
    python -m venv venv
    ```
3. Activate the virtual environment:
    ```bash
    source venv/bin/activate
    ```
4. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```
5. Run the application:
    ```bash
    uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
    ```

## API Documentation

The API documentation is available at http://localhost:8000/docs.

## Usage

You can use the API by sending HTTP requests to the endpoints.

For example, you can register a new user by sending a POST request to http://localhost:8000/api/register with the following JSON payload:
```json
{
    "username": "your-username",
    "email": "your-email@example.com",
    "password": "your-password"
}
```

You can log in to your account by sending a POST request to http://localhost:8000/api/login with the following JSON payload:
```json
{
    "username": "your-username",
    "password": "your-password"
}
```

You can view your profile information by sending a GET request to http://localhost:8000/api/profile.

You can update your profile information by sending a PUT request to http://localhost:8000/api/profile with the following JSON payload:
```json
{
    "username": "your-new-username",
    "email": "your-new-email@example.com"
}
```

You can reset your password by sending a POST request to http://localhost:8000/api/password-reset with the following JSON payload:
```json
{
    "email": "your-email@example.com"
}
```

You can view a list of all users by sending a GET request to http://localhost:8000/api/users.

You can create a new user by sending a POST request to http://localhost:8000/api/users with the following JSON payload:
```json
{
    "username": "new-username",
    "email": "new-email@example.com"
}
```

You can view a user's information by sending a GET request to http://localhost:8000/api/users/{user_id}.

You can update a user's information by sending a PUT request to http://localhost:8000/api/users/{user_id} with the following JSON payload:
```json
{
    "username": "new-username",
    "email": "new-email@example.com"
}
```

You can delete a user by sending a DELETE request to http://localhost:8000/api/users/{user_id}.

You can create a new item by sending a POST request to http://localhost:8000/api/items with the following JSON payload:
```json
{
    "name": "item-name",
    "description": "item-description"
}
```

You can view a list of all items by sending a GET request to http://localhost:8000/api/items.

You can view an item's information by sending a GET request to http://localhost:8000/api/items/{item_id}.

You can update an item's information by sending a PUT request to http://localhost:8000/api/items/{item_id} with the following JSON payload:
```json
{
    "name": "new-name",
    "description": "new-description"
}
```

You can delete an item by sending a DELETE request to http://localhost:8000/api/items/{item_id}.
