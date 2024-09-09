import React, { useState } from 'react';
import AdminForgotPassword from './styles'; // Import the styled component
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Logic to handle password reset email submission
    console.log('Reset link sent to:', email);
  };

  return (
    <AdminForgotPassword>
      <div className="forgot-container">
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-description">
          Enter your email address below and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="forgot-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="forgot-button">Send Reset Link</button>
        </form>
        <div className="forgot-footer">
          <Link to='/signin' >back to signin</Link>
        </div>
      </div>
    </AdminForgotPassword>
  );
}
