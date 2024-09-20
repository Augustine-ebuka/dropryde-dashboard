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
  ListItemText
} from '@mui/material';
import styled from 'styled-components';

// Import the fetchCompanies function from our mock data file
import { fetchCompanies } from '../../../userData';

// Define the Company interface based on the mock data structure
interface Company {
  id: number;
  name: string;
  email: string;
  registrationDate: string;
  status: 'active' | 'pending';
  contactPerson: string;
  phoneNumber: string;
  documents: string[];
}

const Container = styled(Box)`
  padding: 20px;
  background-color: #f5f5f5;
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

const StatusCell = styled(TableCell)<{ status: 'active' | 'pending' }>`
  color: ${props => props.status === 'active' ? 'green' : 'orange'};
  font-weight: bold;
`;

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
`;

const CompanyManagement: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const fetchCompanyData = async () => {
    try {
      const data:any = await fetchCompanies();
      setCompanies(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching company data:", error);
      setLoading(false);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleApprove = (companyId: number) => {
    console.log(`Approving company with id: ${companyId}`);
    setCompanies(companies.map(company => 
      company.id === companyId ? {...company, status: 'active'} : company
    ));
  };

  const handleViewDetails = (company: Company) => {
    setSelectedCompany(company);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCompany(null);
  };

  const filteredCompanies = companies.filter(company => 
    activeTab === 0 ? company.status === 'active' : company.status === 'pending'
  );

  if (loading) {
    return (
      <Container display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom color="primary">
        Company Management
      </Typography>

      <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
        <Tab label="Active Companies" />
        <Tab label="Pending Companies" />
      </Tabs>

      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell header>Company Name</StyledTableCell>
              <StyledTableCell header>Email</StyledTableCell>
              <StyledTableCell header>Registration Date</StyledTableCell>
              <StyledTableCell header>Status</StyledTableCell>
              <StyledTableCell header>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCompanies.map((company) => (
              <StyledTableRow key={company.id}>
                <StyledTableCell>{company.name}</StyledTableCell>
                <StyledTableCell>{company.email}</StyledTableCell>
                <StyledTableCell>{new Date(company.registrationDate).toLocaleDateString()}</StyledTableCell>
                <StatusCell status={company.status}>{company.status}</StatusCell>
                <StyledTableCell>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => handleViewDetails(company)}
                    size="small"
                    style={{ marginRight: '8px' }}
                  >
                    View Details
                  </Button>
                  {activeTab === 1 && (
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => handleApprove(company.id)}
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

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="company-details-modal"
        aria-describedby="company-details-description"
      >
        <ModalContent>
          {selectedCompany && (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedCompany.name} Details
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Contact Person" secondary={selectedCompany.contactPerson} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary={selectedCompany.email} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone Number" secondary={selectedCompany.phoneNumber} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Registration Date" secondary={new Date(selectedCompany.registrationDate).toLocaleDateString()} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Status" secondary={selectedCompany.status} />
                </ListItem>
                <ListItem>
                <ListItemText 
                    primary="Submitted Documents" 
                    secondary={
                    selectedCompany.documents && selectedCompany.documents.length > 0 ? (
                        <List dense>
                        {selectedCompany.documents.map((doc, index) => (
                            <ListItem key={index}>
                            <ListItemText primary={doc} />
                            </ListItem>
                        ))}
                        </List>
                    ) : (
                        "No documents submitted"
                    )
                    } 
                />
</ListItem>
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