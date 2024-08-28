import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Send the login credentials to your server or database
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          <span>Username:</span>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>

        <label>
          <span>Password:</span>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;