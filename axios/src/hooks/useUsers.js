// src/api/hooks/useUsers.js
import { useState, useCallback } from 'react';
import { userService } from '../services/userService';
import { handleApiError } from '../utils/errorHandler';
import debounce from 'lodash.debounce';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsersApi = async () => {
    try {
      console.log('loaded data');
      const data = await userService.getUsers();
      setUsers(data);
    } catch (err) {
      setError(handleApiError(err));
    }
  };

  const fetchUsers = useCallback(
    debounce(
        () => {
        console.log('Debounced fetchUsers called');
        fetchUsersApi();
        },
        1000,
        { leading: true, trailing: false } // 🔥 important
    ),[]
  );

  return { users, fetchUsers, error };
};