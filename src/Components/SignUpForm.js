import React, { useState } from 'react';
import "./Form.css"

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    // Send the sign up credentials to your server or database
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          <span>Username:</span>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>

        <label>
          <span>Email:</span>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>

        <label>
          <span>Password:</span>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>

        <label>
          <span>Confirm Password:</span>
          <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;