import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://dropryde-backend.coralscale.com/v1';

// Define the interface for user data


// Define the interface for the transaction data


// Function to fetch transactions
export const getUsers = async () => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        };
        const response = await axios.get(`${API_URL}/admin/users/fetch`, { headers });
        console.log('response trasnaction', response);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            // console.log(error.response.data);
            throw new Error(error.response.data.message || 'Error fetching users');
        } else {
            throw new Error('An error occurred while fetching users.');
        }
    }
};

// endpoint to approve a user
export const approveUser = async (email: string) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        };
        const response = await axios.patch(`${API_URL}/admin/user/approve`,{email},{ headers });
        // console.log('approving user=====>', response);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            console.log(error.response.data);
            throw new Error(error.response.data.message || 'Error approving users');
        } else {
            throw new Error('An error occurred while approving users.');
        }
    }
};
// endpoint to fetch subscribers
export const fetchSubscribers = async (email: string) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        };
        const response = await axios.get(`${API_URL}/admin/subscribers/fetch`,{ headers });
        console.log('fetching subscriber=====>', response);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            console.log(error.response.data);
            throw new Error(error.response.data.message || 'Error subscribed users');
        } else {
            throw new Error('An error occurred while approving users.');
        }
    }
};
// endpoint to fetch enquiries
export const fetchTickets = async () => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        };
        const response = await axios.get(`${API_URL}/admin/tickets/fetch`,{ headers });
        console.log('fetching subscriber=====>', response);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            console.log(error.response.data);
            throw new Error(error.response.data.message || 'Error subscribed users');
        } else {
            throw new Error('An error occurred while approving users.');
        }
    }
};