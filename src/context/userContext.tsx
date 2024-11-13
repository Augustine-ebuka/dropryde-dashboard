import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { profile } from '../apis/auth';
import { useNavigate } from 'react-router-dom';

// Define the shape of our user profile
interface UserProfile {
  id: string;
  name: string;
  email: string;
  // Add other properties as needed
}

// Define the shape of our context
interface UserContextType {
  userProfile: UserProfile | null;
  loading: boolean;
  error: string | null;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate(); // Add this line

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await profile();
        setUserProfile(data?.data as any);
      } catch (err) {
        navigate('/'); // Redirect to login page if there's an error
        setError('Failed to fetch user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  console.log(userProfile, "profile check from context")

  return (
    <UserContext.Provider value={{ userProfile, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};