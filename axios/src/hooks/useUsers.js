// src/api/hooks/useUsers.js
import { useState } from 'react';
import { userService } from '../services/userService';
import { handleApiError } from '../utils/errorHandler';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const data = await userService.getUsers();
      setUsers(data);
    } catch (err) {
      setError(handleApiError(err));
    }
  };

  return { users, fetchUsers, error };
};