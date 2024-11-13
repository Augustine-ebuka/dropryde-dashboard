import axios, { AxiosResponse } from 'axios';
const API_URL = 'https://dropryde-backend.coralscale.com/v1'
interface LoginValues {
    email: string;
    password: string;
}

interface LoginResponse {
    status: number;
    message: string;
    token?: string; // Assuming the response might return a token on success
    user?: {
        id: string;
        email: string;
        // Add other user fields as needed
    };
    data?: any;
}

export const login = async (values: LoginValues): Promise<LoginResponse> => {
    try {
        const response: AxiosResponse<LoginResponse> = await axios.post(`${API_URL}/admin/signin`, values);
          if (response?.data.data.token) {
          localStorage.setItem('authToken', response.data.data.token);
        }
        console.log('response', response);
        return response.data;
    } catch (error: any) { 
        if (error.response && error.response.data) {
            console.log(error.response.data);
            return error.response.data;
        } else {
            throw new Error('An error occurred during the login process.');
        }
    }
}
interface ProfileData {
  userId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  profileImg: string;
  stack: string;
}

interface ErrorResponse {
  status: number;
  message: string;
}
interface updatePassword {
   password: string,
    new_password: string
}

export const profile = async () => {
  try {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('No token found');
    }
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    };
    const response = await axios.get(`${API_URL}/profile/fetch`, {
        headers,
    });
    console.log('response profile', response);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      console.log(error.response.data);
      return error.response.data as ErrorResponse;
    } else {
      throw new Error('An error occurred during the profile fetching process.');
    }
  }
};

// update passeord
export const updatePasswod = async (value: updatePassword) => {
  try {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('No token found');
    }
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    };
    const response = await axios.patch(`${API_URL}/user/password/update`, value, {
        headers,
    });
    console.log('response update password', response);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      console.log(error.response.data);
      return error.response.data as ErrorResponse;
    } else {
      throw new Error('An error occurred during the profile fetching process.');
    }
  }

  
};
export const sendFOrgetPasswordOtpEmail = async (values: any) => {
  try {
      const response = await axios.post(`${API_URL}/user/password/reset`, values);
      console.log(response.data);
      return response.data;
  } catch (error: any) {
      if (error.response && error.response.data) {
          console.log(error.response.data);
          return error.response.data;
      } else {
          throw new Error('An error occurred during the forgot password process.');
      }
  }
}

export const verifyOtp = async (values: any) => {
  try {
      const response = await axios.post(`${API_URL}/user/password/reset/otp/verify`, values);
      console.log(response.data);
      return response.data;
  } catch (error: any) {
      if (error.response && error.response.data) {
          console.log(error.response.data);
          return error.response.data;
      } else {
          throw new Error('An error occurred during the otp verification process.');
      }
  }
}

export const resetPassword = async (values: any) => {
  try {
      const response = await axios.post(`${API_URL}/user/password/change`, values);
      console.log(response.data);
      return response.data;
  } catch (error: any) {
      if (error.response && error.response.data) {
          console.log(error.response.data);
          return error.response.data;
      } else {
          throw new Error('An error occurred during the password reset process.');
      }
  }
}

