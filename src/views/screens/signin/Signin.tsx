import React, { useState } from 'react';
import AdminLogin from './styles'; // Import the styled component
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../apis/auth'; // Import the login API
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import the LoginResponse interface

export default function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
console.log('Signin', formData);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await login(formData);

      if (response.status === 1) {
        // Success
        toast.success('Login successful!');
        if (response?.data.token) {
          localStorage.setItem('authToken', response.data.token);
        }
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
        // Navigate to a dashboard or home page
      } else {
        // Error from API
        toast.error(response.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred during login. Please try again.');
    }
  };

  return (
    <AdminLogin>
      {/* Toast Container for notifications */}
      <ToastContainer />
      <div className="login-container">
        <h2 className="login-title">Admin Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
            required
          />
          <button className="login-button" type="submit">
            Sign In
          </button>
        </form>
        <div className="login-footer">
          <Link to="/forget-password">Forgot Password?</Link>
        </div>
      </div>
      
    </AdminLogin>
  );
}
