import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import AdminForgotPassword from './styles'; // Reusing the same styled component
import { verifyOtp } from '../../../apis/auth'; // Assume this function exists
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendFOrgetPasswordOtpEmail } from '../../../apis/auth';


interface LocationState {
    email?: string;
  }
export default function VerifyOTP() {

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const location = useLocation();
  const navigate = useNavigate();
    // Cast the state to your interface
    const state = location.state as LocationState;
  const email = state?.email || '';

  useEffect(() => {
    if (!email) {
      navigate('/forget-password');
    }

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [email, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await verifyOtp({ email, otp });
      
      if (response.status === 1) {
        toast.success('OTP verified successfully.');
        // Redirect to reset password page
        navigate('/reset-password', { state: { email, otp } });
      } else {
        toast.error(response.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (countdown > 0) return;

    setLoading(true);
    try {
      const response = await sendFOrgetPasswordOtpEmail({ email });
      
      if (response.status === 1) {
        toast.success('New OTP sent successfully.');
        setCountdown(60);
      } else {
        toast.error(response.message || 'Failed to resend OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminForgotPassword>
      <ToastContainer />
      <div className="forgot-container">
        <h2 className="forgot-title">Verify OTP</h2>
        <p className="forgot-description">
          Enter the OTP sent to your email address {email}.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            className="forgot-input"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit" className="forgot-button" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
        <div className="forgot-footer">
          <button 
            onClick={handleResendOtp} 
            disabled={countdown > 0 || loading}
            className="resend-button"
          >
            {countdown > 0 ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
          </button>
          <Link to='/signin'>Back to Sign In</Link>
        </div>
      </div>
    </AdminForgotPassword>
  );
}