// src/api/services/userService.js
import axiosInstance from '../api/axiosInstance';
import { API_ENDPOINTS } from '../api/endpoints';

export const userService = {
  getUsers: () => axiosInstance.get(API_ENDPOINTS.USERS.GET_ALL),
};