import React, { useState } from 'react';
import AdminLogin from './styles'; // Import the styled component
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../apis/auth'; // Import the login API
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GrFormViewHide } from "react-icons/gr";
import { BiHide } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

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
        toast.success('Login successful!');
        if (response?.data.token) {
          localStorage.setItem('authToken', response.data.token);
        }
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        toast.error(response.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred during login. Please try again.');
    }
  };

  return (
    <AdminLogin>
      <ToastContainer />
      <div className="login-container">
        <img src="https://i.ibb.co/fF6NJnP/favicon.png" alt="favicon" />
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

          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
              required
            />
            {/* Show password toggle */}
            {showPassword ? (
            <AiOutlineEye
              color="#F5AC38"
              size={25}
              onClick={() => setShowPassword(prev => !prev)}
              className="password-toggle"
            />
          ) : (
            <BiHide
              color="#F5AC38"
              size={25}
              onClick={() => setShowPassword(prev => !prev)}
              className="password-toggle"
            />
          )}

          </div>

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
