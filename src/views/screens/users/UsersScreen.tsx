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
  Tabs, 
  Tab,
  CircularProgress,
  Modal,
  List,
  ListItem,
  ListItemText,
  ImageList,
  ImageListItem,
  Pagination
} from '@mui/material';
import styled from 'styled-components';

// Import the fetchCompanies function from our mock data file
import { fetchCompanies } from '../../../userData';
import { getUsers } from '../../../apis/users';
import { approveUser } from '../../../apis/users';
import { toast, ToastContainer } from 'react-toastify';


// Define the Company interface based on the mock data structure
interface Company {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  business_name: string;
  is_approved?:0 | 1;
  business_size: string;
  user_type: string;
  date_created: string;
  date_updated: string;
  address_doc?: string;
  identity_doc?:string;
  business_doc?:string;
  state?:string;
  city?: string;
}

const Container = styled(Box)`
  padding: 20px;
  background-color: #f5f5f5
`;

const TableWrapper = styled(TableContainer)`
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #fafafa;
  }
`;

const StyledTableCell = styled(TableCell)<{ header?: boolean }>`
  font-weight: ${props => props.header ? 'bold' : 'normal'};
`;

const StatusCell = styled(TableCell)<{ is_approved: 0 | 1 }>`
  color: ${props => props.is_approved === 1 ? 'green' : 'orange'};
  font-weight: bold;
`;

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
`;

const PaginationContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CompanyManagement: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const fetchCompanyData = async () => {
    try {
      const data:any = await getUsers();
      setCompanies(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching company data:", error);
      setLoading(false);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  const handleApprove = async (userEmail: string) => {
    try {
      // Call the API to approve the user
      await approveUser(userEmail);
      
      // If the API call is successful, update the local state
      setCompanies(companies.map(company => 
        company.email === userEmail ? {...company, is_approved: 1} : company
      ));
      toast.success("Company approved successfully") 
      
      console.log(`User with email ${userEmail} approved successfully`);
    } catch (error) {
      toast.error("Error approving Company") 
      console.error(`Error approving user with email ${userEmail}:`, error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  const handleViewDetails = (company: Company) => {
    setSelectedCompany(company);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCompany(null);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const filteredCompanies = companies.filter(company => 
    activeTab === 0 ? company.is_approved === 1 : company.is_approved === 0
  );

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCompanies = filteredCompanies.slice(startIndex, endIndex);

  if (loading) {
    return (
      <Container display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <ToastContainer />
      <Typography variant="h5" gutterBottom color="#e3b616" p={"5px"} marginTop={"20px"}>
        Company Management
      </Typography>
      <Tabs 
      value={activeTab} 
      onChange={handleTabChange} 
      sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: '#e3b616',
        },
        '& .MuiTab-root': {
          color: '',
          '&.Mui-selected': {
            color: '#e3b616',
          },
        },
      }}
      >
        <Tab label="Active Companies"/>
        <Tab label="Pending Companies" />
      </Tabs>

      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell header>Business Name</StyledTableCell>
              <StyledTableCell header>Email</StyledTableCell>
              <StyledTableCell header>Registration Date</StyledTableCell>
              <StyledTableCell header>Status</StyledTableCell>
              <StyledTableCell header>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentCompanies.map((company) => (
              <StyledTableRow key={company.id}>
                <StyledTableCell>{company.business_name}</StyledTableCell>
                <StyledTableCell>{company.email}</StyledTableCell>
                <StyledTableCell>{new Date(company.date_created).toLocaleDateString()}</StyledTableCell>
                <StyledTableCell>{company.is_approved===0 ? "Pending": "Approved"}</StyledTableCell>
                <StyledTableCell>
                  <Button 
                    variant="outlined" 
                    onClick={() => handleViewDetails(company)}
                    size="small"
                    style={{ marginRight: '8px', color:"#e3b616", outlineColor:"#e3b616" }}
                  >
                    View Details
                  </Button>
                  {activeTab === 1 && (
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => handleApprove(company.email)}
                      size="small"
                    >
                      Approve
                    </Button>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>

      <PaginationContainer>
        <Pagination 
          count={totalPages} 
          page={currentPage} 
          onChange={handlePageChange} 
          color="primary"
        />
      </PaginationContainer>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="company-details-modal"
        aria-describedby="company-details-description"
      >
        <ModalContent className='' style={{height:"500px", overflowY:"scroll"}}>
          {selectedCompany && (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedCompany.business_name} Details
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Contact Person" secondary={selectedCompany.email} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="First Name" secondary={selectedCompany.firstname} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Last Name" secondary={selectedCompany.lastname} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary={selectedCompany.email} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone Number" secondary={selectedCompany.phone} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Business Name" secondary={selectedCompany.business_name} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Business size" secondary={selectedCompany.business_size} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Country" secondary={selectedCompany.country} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="State" secondary={selectedCompany.state} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="City" secondary={selectedCompany.city} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Registration Date" secondary={new Date(selectedCompany.date_created).toLocaleDateString()} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Status" secondary={selectedCompany.is_approved===0?"Pending":"Active"} />
                </ListItem>
                <ImageListItem>
                  <img
                    src={`${selectedCompany.address_doc}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${selectedCompany.address_doc}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt='image'
                    loading="lazy"
                    style={{ borderRadius: '8px' }} // Optional: to round the corners
                  />
              </ImageListItem>
              </List>
              <Button onClick={handleCloseModal} color="primary">
                Close
              </Button>
            </>
          )}
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default CompanyManagement;