import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Modal,
    TextField,
    Pagination,
} from '@mui/material';

const StyledModal = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled(Box)`
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    max-width: 1000px; 
    max-height: 80vh; 
    overflow-y: auto;
`;

const StyledTextField = styled(TextField)`
    max-width: 200px;
    margin: 16px 10px 10px 10px;
    padding:10px;
`;

interface Driver {
    id: number;
    name: string;
    age: number;
    licenseNumber: string;
}

const Drivers: React.FC = () => {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
    const [page, setPage] = useState(1);
    const [rowsPerPage] = useState(5);

    useEffect(() => {
        // Fetch drivers data (replace with your data fetching logic)
        const fetchDrivers = async () => {
            // Example data
            const data = [
                { id: 1, name: 'John Doe', age: 30, licenseNumber: 'XYZ123' },
                { id: 2, name: 'Jane Smith', age: 25, licenseNumber: 'ABC456' },
                // Add more driver data as needed
            ];
            setDrivers(data);
        };

        fetchDrivers();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setPage(1); // Reset to first page on search
    };

    const handleOpenModal = (driver: Driver) => {
        setSelectedDriver(driver);
    };

    const handleCloseModal = () => {
        setSelectedDriver(null);
    };

    const filteredDrivers = drivers.filter(driver =>
        driver.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginatedDrivers = filteredDrivers.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );

    return (
        <Box padding={2}>
            <Typography variant="h4" gutterBottom>Driver List</Typography>
            <StyledTextField
                label="Search Drivers"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{mb:"10px", border:"2px red"}}
            />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>License Number</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedDrivers.map(driver => (
                            <TableRow key={driver.id}>
                                <TableCell>{driver.name}</TableCell>
                                <TableCell>{driver.age}</TableCell>
                                <TableCell>{driver.licenseNumber}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleOpenModal(driver)}>View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={Math.ceil(filteredDrivers.length / rowsPerPage)}
                page={page}
                onChange={(event, value) => setPage(value)}
                color="primary"
                style={{ marginTop: '16px' }}
            />
            <StyledModal
                open={!!selectedDriver}
                onClose={handleCloseModal}
            >
                <ModalContent sx={{ height: "500px", width: "500px" }}>
        {selectedDriver && (
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{selectedDriver.name}</Typography>
                    <Typography>Age: {selectedDriver.age}</Typography>
                    <Typography>License Number: {selectedDriver.licenseNumber}</Typography>
                    {/* Add more details if needed */}
            </Box>
            <Box>
                <Button onClick={handleCloseModal} sx={{ mt: 2 }}>Close</Button>
            </Box>
        </Box>
    )}
</ModalContent>
            </StyledModal>
        </Box>
    );
};

export default Drivers;