# k

Backend API for k

## Tech Stack

- **Frontend**: React
- **Backend**: FastAPI + SQLAlchemy
- **Frontend Source**: GitHub ([Repository](https://github.com/HimaShankarReddyEguturi/Createtestingapplication))

## Project Structure

```
k/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- User registration and login
- Password reset
- User profile management
- Item CRUD operations

## API Endpoints

- `POST /api/register` - Register a new user account.
- `POST /api/login` - Log in to an existing user account.
- `GET /api/profile` - View the current user's profile information.
- `PUT /api/profile` - Edit the current user's profile information.
- `POST /api/password-reset` - Request a password reset for the current user's account.
- `GET /api/users` - View a list of all users.
- `POST /api/items` - Add a new item to the database.
- `GET /api/items` - View a list of all items in the database.
- `PUT /api/items/{item_id}` - Edit an existing item in the database.
- `DELETE /api/items/{item_id}` - Delete an item from the database.

## License

MIT
