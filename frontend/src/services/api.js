import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication
export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  if (response.data.access_token) {
    localStorage.setItem('token', response.data.access_token);
  }
  return response.data;
};

export const register = async (email, username, password) => {
  const response = await api.post('/auth/register', { email, username, password });
  if (response.data.access_token) {
    localStorage.setItem('token', response.data.access_token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

// API Endpoints
export const api_register = async (data) => {
  const response = await api.post('/api/register', data);
  return response.data;
};
export const api_login = async (data) => {
  const response = await api.post('/api/login', data);
  return response.data;
};
export const api_profile = async (params = {}) => {
  const response = await api.get('/api/profile', { params });
  return response.data;
};
export const api_profile = async (id, data) => {
  const response = await api.put(`/api/profile/${id}`, data);
  return response.data;
};
export const api_content = async (data) => {
  const response = await api.post('/api/content', data);
  return response.data;
};
export const api_content = async (params = {}) => {
  const response = await api.get('/api/content', { params });
  return response.data;
};
export const api_content_{content_id} = async (params = {}) => {
  const response = await api.get('/api/content/{content_id}', { params });
  return response.data;
};
export const api_content_{content_id} = async (id, data) => {
  const response = await api.put(`/api/content/{content_id}/${id}`, data);
  return response.data;
};
export const api_content_{content_id} = async (id) => {
  const response = await api.delete(`/api/content/{content_id}/${id}`);
  return response.data;
};
export const api_follow = async (data) => {
  const response = await api.post('/api/follow', data);
  return response.data;
};
export const api_follow_{user_id} = async (id) => {
  const response = await api.delete(`/api/follow/{user_id}/${id}`);
  return response.data;
};
export const api_notifications = async (params = {}) => {
  const response = await api.get('/api/notifications', { params });
  return response.data;
};

export default api;
