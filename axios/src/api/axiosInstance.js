// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
  console.log(`[Request] ${config.method.toUpperCase()} ${config.url}`);
  return config;
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`[Response] ${response.config.url}`);
    return response.data;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;