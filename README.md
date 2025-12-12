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
- CRUD operations on data

## API Endpoints

- `POST /api/register` - Register a new user
- `POST /api/login` - Login an existing user
- `POST /api/reset-password` - Reset a user's password
- `GET /api/profile` - Get a user's profile information
- `PUT /api/profile` - Update a user's profile information
- `GET /api/data` - Get all data
- `POST /api/data` - Create new data
- `GET /api/data/{id}` - Get data by ID
- `PUT /api/data/{id}` - Update data by ID
- `DELETE /api/data/{id}` - Delete data by ID

## License

MIT
