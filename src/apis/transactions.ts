import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://dropryde-backend.coralscale.com/v1';

// Define the interface for user data
interface User {
    firstname: string;
    lastname: string;
    email: string;
}

// Define the interface for the transaction data
export interface TransactionData {
    id: number;
    user_id: number;
    amount: number;
    details: string;
    reference: string;
    type: string;
    payment_type: string;
    gateway: string;
    gateway_reference: string | null;
    status: string;
    meta: string;
    date_created: string;
    date_updated: string;
    user: User; // Embedding the user object inside the transaction
}

// Function to fetch transactions
export const getTransactions = async (): Promise<TransactionData[] | any> => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        };
        const response: AxiosResponse<TransactionData[]> = await axios.get(`${API_URL}/admin/transactions/fetch`, { headers });
        // console.log('response trasnaction', response);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            console.log(error.response.data);
            throw new Error(error.response.data.message || 'Error fetching transactions.');
        } else {
            throw new Error('An error occurred while fetching transactions.');
        }
    }
};
