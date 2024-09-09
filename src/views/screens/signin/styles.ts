import styled from 'styled-components';

const AdminLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f2f5;

    .login-container {
        width: 100%;
        max-width: 400px;
        background-color: white;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .login-title {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 20px;
    }

    .login-input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }

    .login-button {
        width: 100%;
        padding: 10px;
        background-color: #F5AC38;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #E36E28;
        }
    }

    .login-footer {
        margin-top: 20px;
        font-size: 0.875rem;
        color: #666;
    }

    .login-footer a {
        color: #3f51b5;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default AdminLogin;
