import React, { useState } from 'react';
import AdminForgotPassword from './styles'; // Import the styled component
import { Link, useNavigate } from 'react-router-dom';
import { sendFOrgetPasswordOtpEmail } from '../../../apis/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendFOrgetPasswordOtpEmail({ email });
      
      if (response.status === 1) {
        toast.success('OTP sent successfully. Please check your email.');
        // Redirect to OTP verification page
        setTimeout(()=>{
          navigate('/verify-otp', { state: { email } });
        }, 3000)
      } else {
        toast.error(response.message || 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminForgotPassword>
      <ToastContainer />
      <div className="forgot-container">
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-description">
          Enter your email address below and we'll send you an OTP to reset your password.
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
          <button type="submit" className="forgot-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
        </form>
        <div className="forgot-footer">
          <Link to='/'>Back to Sign In</Link>
        </div>
      </div>
    </AdminForgotPassword>
  );
}