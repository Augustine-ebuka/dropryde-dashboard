import styled from 'styled-components';

const AdminForgotPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f2f5;

    .forgot-container {
        width: 100%;
        max-width: 400px;
        background-color: white;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    .forgot-title {
        font-size: 1.5rem;
        color: #333;
        margin-bottom: 20px;
    }

    .forgot-description {
        font-size: 0.875rem;
        color: #666;
        margin-bottom: 20px;
    }

    .forgot-input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }

    .forgot-button {
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

    .forgot-footer {
        margin-top: 20px;
        font-size: 0.875rem;
        color: #666;
    }

    .forgot-footer a {
        color: #3f51b5;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
        .resend-button {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 10px;
    text-decoration: underline;

    &:disabled {
      color: #6c757d;
      cursor: not-allowed;
    }
  }

  .forgot-footer {
    display: flex;
    flex-direction: column;
    align-items: center;

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #666;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.password-requirements {
  margin-top: 20px;
  font-size: 0.9em;
  color: #666;
}

.password-requirements ul {
  padding-left: 20px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:disabled {
  background-color: #cccccc;
}
`;

export default AdminForgotPassword;
