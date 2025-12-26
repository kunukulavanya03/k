# k

Backend API for k

## Tech Stack

- **Frontend**: React
- **Backend**: FastAPI + SQLAlchemy
- **Frontend Source**: GitHub ([Repository](https://github.com/HimaShankarReddyEguturi/Hotelbookinguidesign))

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
- User profile management
- Content creation and management
- Following and unfollowing other users
- Notification system

## API Endpoints

- `POST /api/register` - Register a new user
- `POST /api/login` - Log in to the application
- `GET /api/profile` - Get the current user's profile information
- `PUT /api/profile` - Update the current user's profile information
- `POST /api/content` - Create a new piece of content
- `GET /api/content` - Get a list of all content
- `GET /api/content/{content_id}` - Get a specific piece of content
- `PUT /api/content/{content_id}` - Update a specific piece of content
- `DELETE /api/content/{content_id}` - Delete a specific piece of content
- `POST /api/follow` - Follow another user

## License

MIT
