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
  Send as SendIcon,
} from '@material-ui/icons';
import { fetchTickets, fetchMessage, replyTicket } from "../../../apis/users";
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
  chatContainer: {
    height: '300px',
    overflowY: 'auto',
    marginBottom: theme.spacing(2),
  },
  messageItem: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: theme.spacing(1),
    maxWidth: '70%',
  },
  userMessage: {
    backgroundColor: theme.palette.primary.light,
    alignSelf: 'flex-end',
  },
  adminMessage: {
    backgroundColor: theme.palette.grey[200],
    alignSelf: 'flex-start',
  },
  replyInput: {
    display: 'flex',
    alignItems: 'center',
  },
}));

interface SupportItem {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  type: string;
  date_created: string;
  is_active: number;
}

interface Message {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  ticket_id: string;
  admin_user: string;
  date_created: string;
  date_updated: string;
}

const AdminSupportScreen: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [queries, setQueries] = useState<SupportItem[]>([]);
  const [complaints, setComplaints] = useState<SupportItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<SupportItem | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [replyMessage, setReplyMessage] = useState('');

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const ticketsData = await fetchTickets();        console.log(ticketsData.data)
        setQueries(ticketsData.data.filter((ticket: SupportItem) => ticket.type === 'enquiry'));
        setComplaints(ticketsData.data.filter((ticket: SupportItem) => ticket.type === 'Complaint'));
      } catch (err) {
        console.error('Error fetching tickets:', err);
      }
    };

    loadTickets();
  }, []);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleItemClick = async (item: SupportItem) => {
    setSelectedItem(item);
    setOpenDialog(true);
    try {
      const messagesData = await fetchMessage(parseInt(item.id));
      setMessages(messagesData.data);
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
    setMessages([]);
    setReplyMessage('');
  };

  const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReplyMessage(event.target.value);
  };

  const handleSendReply = async () => {
    if (replyMessage.trim() && selectedItem) {
      const newMessage: Message = {
        id: Date.now(),
        firstname: 'Admin',
        lastname: '',
        email: 'admin@example.com',
        message: replyMessage,
        ticket_id: selectedItem.id,
        admin_user: 'Admin',
        date_created: new Date().toISOString(),
        date_updated: new Date().toISOString(),
      };
      await replyTicket(selectedItem.id, replyMessage)
      console.log(replyMessage, "========================>")
      setMessages([...messages, newMessage]);
      setReplyMessage('');
      // Here you would typically send the reply to the server
      // For now, we're just adding it to the local state
    }
  };

  const renderList = (items: SupportItem[]) => (
    <List>
      {items.map((item) => (
        <Paper key={item.id} className={classes.listItem}>
          <ListItem alignItems="flex-start" button onClick={() => handleItemClick(item)}>
            <ListItemAvatar>
              <Avatar>{item.firstname.charAt(0) + item.lastname.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${item.firstname} ${item.lastname}`}
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" color="textPrimary">
                    {item.email}
                  </Typography>
                  <br />
                  {item.date_created}
                </React.Fragment>
              }
            />
            <ListItemText
              primary={item.type}
              secondary={item.email}
            />
            <Chip
              label={item.is_active === 1 ? "Active" : "Inactive"}
              color={item.is_active === 1 ? 'secondary' : 'default'}
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
          <Tab label="Queries" icon={<QueryIcon />} />
          <Tab label="Complaints" icon={<ReportIcon />} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="h6" gutterBottom>
          Queries Received
        </Typography>
        {renderList(queries)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6" gutterBottom>
          Complaints and Reports
        </Typography>
        {renderList(complaints)}
      </TabPanel>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedItem ? `${selectedItem.firstname} ${selectedItem.lastname}` : ''}</DialogTitle>
        <DialogContent>
          <div className={classes.chatContainer}>
            {messages.map((message) => (
              <Box
                key={message.id}
                className={`${classes.messageItem} ${
                  message.admin_user ? classes.adminMessage : classes.userMessage
                }`}
                alignSelf={message.admin_user ? 'flex-start' : 'flex-end'}
              >
                <Typography variant="body2">{message.message}</Typography>
                <Typography variant="caption" display="block">
                  {new Date(message.date_created).toLocaleString()}
                </Typography>
              </Box>
            ))}
          </div>
          <div className={classes.replyInput}>
            <TextField
              autoFocus
              margin="dense"
              id="reply"
              label="Your Reply"
              type="text"
              fullWidth
              value={replyMessage}
              onChange={handleReplyChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendReply()}
            />
            <Button
              onClick={handleSendReply}
              color="primary"
              className={classes.actionButton}
              startIcon={<SendIcon />}
            >
              Send
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
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