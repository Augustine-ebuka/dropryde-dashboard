import styled from 'styled-components'
import {
    Box,
    Modal,
    TextField,
} from '@mui/material';

export const StyledModal = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled(Box)`
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    max-width: 600px; /* Increased modal width */
    max-height: 80vh; /* Limit height */
    overflow-y: auto; /* Enable scrolling */
`;

const StyledTextField = styled(TextField)`
    max-width: 400px; /* Adjusted width */
    margin: 16px 0; /* Add some margin for spacing */
`;
