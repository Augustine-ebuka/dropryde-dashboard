import React from 'react';
import AdminLogin from './styles'; // Import the styled component
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <AdminLogin>
      <div className="login-container">
        <h2 className="login-title">Admin Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />
        <button className="login-button">Sign In</button>
        <div className="login-footer">
          <Link to="/forget-password">Forgot Password?</Link>
        </div>
      </div>
    </AdminLogin>
  );
}
