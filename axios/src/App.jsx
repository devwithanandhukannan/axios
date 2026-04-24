// src/App.js
import React from 'react';
import { useUsers } from './hooks/useUsers';

function App() {
  const { users, fetchUsers, error } = useUsers();

  return (
    <div style={{ padding: '20px' }}>
      <h1>User List</h1>

      <button onClick={fetchUsers}>
        Fetch Users
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;