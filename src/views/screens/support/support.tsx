import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  QuestionAnswer as QueryIcon,
  Report as ReportIcon,
} from '@material-ui/icons';
import {fetchTickets} from "../../../apis/users"
import { IoTicketSharp } from 'react-icons/io5';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    marginBottom: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  actionButton: {
    marginLeft: theme.spacing(1),
  },
}));

interface SupportItem {
  id: string;
  user: string;
  content: string;
  timestamp: string;
  status: 'Open' | 'In Progress' | 'Closed';
}

const AdminSupportScreen: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [queries, setQueries] = useState<SupportItem[]>([]);
  const [complaints, setComplaints] = useState<SupportItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<SupportItem | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        // setIsLoading(true);
        const ticketsData = await fetchTickets();
        console.log(ticketsData.data)
        
        // Assuming the API returns an object with categories
        setQueries(ticketsData.data);
        setComplaints(ticketsData.data);
      } catch (err) {
        console.error('Error fetching tickets:', err);
        // setError('Failed to load tickets. Please try again later.');
      } finally {
        // setIsLoading(false);
      }
    };

    loadTickets();
  }, []);

  console.log()

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleItemClick = (item: SupportItem) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  const renderList = (items: any) => (
    <List>
      {items.map((item: any) => (
        <Paper key={item.id} className={classes.listItem}>
          <ListItem alignItems="flex-start" button onClick={() => handleItemClick(item)}>
            <ListItemAvatar>
              <Avatar>{item.firstname.charAt(0) + item.lastname.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.user}
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" color="textPrimary">
                    
                  </Typography>
                  <br />
                  {item.date_created}
                </React.Fragment>
              }
            />
            <Chip
              label={item.status}
              color={item.status === 'Open' ? 'secondary' : item.status === 'In Progress' ? 'primary' : 'default'}
              size="small"
              className={classes.chip}
            />
          </ListItem>
        </Paper>
      ))}
    </List>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"          
        >
          {/* <Tab label="Chats" icon={<ChatIcon />} /> */}
          <Tab label="Queries" icon={<QueryIcon />} />
          <Tab label="Complaints" icon={<ReportIcon />} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={1}>
        <Typography variant="h6" gutterBottom>
          Queries Received
        </Typography>
        {renderList(queries)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6" gutterBottom>
          Complaints and Reports
        </Typography>
        {renderList(complaints)}
      </TabPanel>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedItem?.user}</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>{selectedItem?.content}</Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {selectedItem?.timestamp}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="response"
            label="Your Response"
            type="text"
            fullWidth
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Respond
          </Button>
          <Button onClick={handleCloseDialog} color="secondary">
            Close Issue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminSupportScreen;