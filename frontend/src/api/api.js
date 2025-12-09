import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects API
export const getProjects = () => api.get('/api/projects');
export const createProject = (formData) =>
  api.post('/api/projects', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const deleteProject = (id) => api.delete(`/api/projects/${id}`);

// Clients API
export const getClients = () => api.get('/api/clients');
export const createClient = (formData) =>
  api.post('/api/clients', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const deleteClient = (id) => api.delete(`/api/clients/${id}`);

// Contact API
export const getContacts = () => api.get('/api/contact');
export const createContact = (data) => api.post('/api/contact', data);

// Newsletter API
export const getSubscribers = () => api.get('/api/subscribe');
export const subscribeNewsletter = (data) => api.post('/api/subscribe', data);

export default api;
