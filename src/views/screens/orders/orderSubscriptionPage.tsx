import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Card,
  CardContent,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Define types for our data
type Order = {
    id: string;
    date: string;
    status: 'New' | 'Completed' | 'Canceled';
    total: number;
  };
  
  type PaymentHistory = {
    id: string;
    date: string;
    amount: number;
    method: string;
  };
  
  type SubscriptionPackage = {
    name: string;
    price: number;
    features: string[];
  };
  
  type Subscriber = {
    id: string;
    name: string;
    email: string;
    orders: Order[];
    paymentHistory: PaymentHistory[];
    subscriptionPackage: SubscriptionPackage;
  };
  

const SubscriberManagementPage: React.FC = () => {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState<any[]>([]);
  const [selectedSubscriber, setSelectedSubscriber] = useState<Subscriber | null>(null);
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch subscribers data (simulate API call)
  useEffect(() => {
    const fetchedSubscribers = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        orders: [
          { id: '1', date: '2023-05-01', status: 'New', total: 100 },
          { id: '2', date: '2023-05-02', status: 'Completed', total: 150 },
        ],
        paymentHistory: [
          { id: '1', date: '2023-05-01', amount: 100, method: 'Credit Card' },
          { id: '2', date: '2023-05-02', amount: 150, method: 'PayPal' },
        ],
        subscriptionPackage: {
          name: 'Pro',
          price: 19.99,
          features: ['Feature 1', 'Feature 2', 'Feature 3'],
        },
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        orders: [
          { id: '3', date: '2023-05-03', status: 'Completed', total: 200 },
          { id: '4', date: '2023-05-04', status: 'Canceled', total: 75 },
        ],
        paymentHistory: [
          { id: '3', date: '2023-05-03', amount: 200, method: 'Bank Transfer' },
        ],
        subscriptionPackage: {
          name: 'Basic',
          price: 9.99,
          features: ['Feature 1', 'Feature 2'],
        },
      },
      // Add more subscribers here for testing purposes
    ];

    setSubscribers(fetchedSubscribers);
    setFilteredSubscribers(fetchedSubscribers);
  }, []);

  const handleSubscriberSelect = (subscriber: Subscriber) => {
    setSelectedSubscriber(subscriber);
    setTabValue(0);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = subscribers.filter(subscriber => 
      subscriber.email.toLowerCase().includes(query) ||
      subscriber.name.toLowerCase().includes(query)
    );
    setFilteredSubscribers(filtered);
  };

  return (
    <Box sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom color="#e3b616" p={"5px"} marginTop={"20px"}>
        Subscriber Management
      </Typography>

      <Grid container spacing={3}>
        {/* Subscriber List with Search */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Subscribers
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by email or name"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
            <List>
              {filteredSubscribers.map((subscriber) => (
                <ListItem key={subscriber.id} disablePadding>
                  <ListItemButton onClick={() => handleSubscriberSelect(subscriber)}>
                    <ListItemText primary={subscriber.name} secondary={subscriber.email} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {filteredSubscribers.length === 0 && (
              <Typography variant="body2" color="text.secondary" align="center">
                No subscribers found
              </Typography>
            )}
          </Paper>
        </Grid>

        {/* Subscriber Details */}
        <Grid item xs={12} md={9}>
          {selectedSubscriber ? (
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                {selectedSubscriber.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: {selectedSubscriber.email}
              </Typography>

              <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 2 }}>
                <Tab label="Orders" />
                <Tab label="Payment History" />
                <Tab label="Subscription Package" />
              </Tabs>

              {/* Orders */}
              {tabValue === 0 && (
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedSubscriber.orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <Chip
                              label={order.status}
                              color={
                                order.status === 'New'
                                  ? 'primary'
                                  : order.status === 'Completed'
                                  ? 'success'
                                  : 'error'
                              }
                            />
                          </TableCell>
                          <TableCell align="right">${order.total.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}

              {/* Payment History */}
              {tabValue === 1 && (
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Payment ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Method</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {selectedSubscriber.paymentHistory.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell>{payment.id}</TableCell>
                          <TableCell>{payment.date}</TableCell>
                          <TableCell>${payment.amount.toFixed(2)}</TableCell>
                          <TableCell>{payment.method}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}

              {/* Subscription Package */}
              {tabValue === 2 && (
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {selectedSubscriber.subscriptionPackage.name}
                    </Typography>
                    <Typography color="textSecondary">
                      ${selectedSubscriber.subscriptionPackage.price.toFixed(2)} / month
                    </Typography>
                    <Typography variant="body2" component="div">
                      Features:
                      <ul>
                        {selectedSubscriber.subscriptionPackage.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Paper>
          ) : (
            <Paper sx={{ p: 2 }}>
              <Typography variant="body1">Select a subscriber to view details</Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubscriberManagementPage;