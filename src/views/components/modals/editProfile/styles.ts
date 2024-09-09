import styled from 'styled-components';

export const ProfileDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  h2 {
    color: #333;
  }

  .error {
    color: red;
    font-size: 12px;
  }

  .save-btn {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #45a049;
    }
  }
`;
