from fastapi.testclient import TestClient
from app.main import app
from app.routers import router

client = TestClient(app)

def test_register_user():
    response = client.post('/api/register', json={'username': 'testuser', 'email': 'test@example.com', 'password': 'testpassword'})
    assert response.status_code == 200

def test_login_user():
    response = client.post('/api/login', json={'username': 'testuser', 'password': 'testpassword'})
    assert response.status_code == 200

def test_get_users():
    response = client.get('/api/users')
    assert response.status_code == 200

def test_get_user():
    response = client.get('/api/users/1')
    assert response.status_code == 200

def test_update_user():
    response = client.put('/api/users/1', json={'username': 'updateduser', 'email': 'updated@example.com'})
    assert response.status_code == 200

def test_delete_user():
    response = client.delete('/api/users/1')
    assert response.status_code == 200
