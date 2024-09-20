import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

const SettingsPage: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  // State for each section
  const [brandInfo, setBrandInfo] = useState({
    businessName: '',
    logo: '',
    additionalInfo: '',
  });
  const [aboutUs, setAboutUs] = useState('');
  const [brandFeatures, setBrandFeatures] = useState<string[]>([]);
  const [paymentSettings, setPaymentSettings] = useState({
    acceptedMethods: [] as string[],
    processingMethod: '',
  });
  const [socialLinks, setSocialLinks] = useState<{ platform: string; url: string }[]>([]);
  const [staticPages, setStaticPages] = useState<{ title: string; content: string }[]>([]);
  const [faq, setFaq] = useState<{ question: string; answer: string }[]>([]);

  const handleOpenDialog = (type: string, index: number = -1) => {
    setDialogType(type);
    setEditIndex(index);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDialogType('');
    setEditIndex(-1);
  };

  const handleSave = () => {
    // Implement save logic for each section
    console.log('Saving settings...');
    handleCloseDialog();
  };

  const renderDialog = () => {
    switch (dialogType) {
      case 'brandFeature':
        return (
          <TextField
            autoFocus
            margin="dense"
            label="Brand Feature"
            fullWidth
            variant="outlined"
          />
        );
      case 'socialLink':
        return (
          <>
            <TextField
              autoFocus
              margin="dense"
              label="Platform"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="URL"
              fullWidth
              variant="outlined"
            />
          </>
        );
      case 'staticPage':
        return (
          <>
            <TextField
              autoFocus
              margin="dense"
              label="Page Title"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="Page Content"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </>
        );
      case 'faq':
        return (
          <>
            <TextField
              autoFocus
              margin="dense"
              label="Question"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="Answer"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        {/* Brand Information */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Brand Information
            </Typography>
            <TextField
              fullWidth
              label="Business Name"
              value={brandInfo.businessName}
              onChange={(e) => setBrandInfo({ ...brandInfo, businessName: e.target.value })}
              margin="normal"
              style={{fontSize:"8px"}}
            />
            <TextField
              fullWidth
              label="Logo URL"
              value={brandInfo.logo}
              onChange={(e) => setBrandInfo({ ...brandInfo, logo: e.target.value })}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Additional Information"
              value={brandInfo.additionalInfo}
              onChange={(e) => setBrandInfo({ ...brandInfo, additionalInfo: e.target.value })}
              margin="normal"
              multiline
              rows={4}
            />
          </Paper>
        </Grid>

        {/* About Us */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <TextField
              fullWidth
              label="About Us Content"
              value={aboutUs}
              onChange={(e) => setAboutUs(e.target.value)}
              margin="normal"
              multiline
              rows={6}
            />
          </Paper>
        </Grid>

        {/* Brand Features */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Brand Features
            </Typography>
            <List>
              {brandFeatures.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemText primary={feature} />
                  <IconButton onClick={() => handleOpenDialog('brandFeature', index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => {
                    const newFeatures = [...brandFeatures];
                    newFeatures.splice(index, 1);
                    setBrandFeatures(newFeatures);
                  }}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <Button startIcon={<AddIcon />} onClick={() => handleOpenDialog('brandFeature')}>
              Add Feature
            </Button>
          </Paper>
        </Grid>

        {/* Online Payments Settings */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Online Payments Settings
            </Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel>Accepted Payment Methods</InputLabel>
              <Select
                multiple
                value={paymentSettings.acceptedMethods}
                onChange={(e) => setPaymentSettings({ ...paymentSettings, acceptedMethods: e.target.value as string[] })}
              >
                <MenuItem value="creditCard">Credit Card</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
                <MenuItem value="bankTransfer">Bank Transfer</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Processing Method</InputLabel>
              <Select
                value={paymentSettings.processingMethod}
                onChange={(e) => setPaymentSettings({ ...paymentSettings, processingMethod: e.target.value as string })}
              >
                <MenuItem value="inHouse">In-house Processing</MenuItem>
                <MenuItem value="thirdParty">Third-party Processing</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>

        {/* Social Links */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Social Links
            </Typography>
            <List>
              {socialLinks.map((link, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${link.platform}: ${link.url}`} />
                  <IconButton onClick={() => handleOpenDialog('socialLink', index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => {
                    const newLinks = [...socialLinks];
                    newLinks.splice(index, 1);
                    setSocialLinks(newLinks);
                  }}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <Button startIcon={<AddIcon />} onClick={() => handleOpenDialog('socialLink')}>
              Add Social Link
            </Button>
          </Paper>
        </Grid>

        {/* Static Pages */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Static Pages
            </Typography>
            <List>
              {staticPages.map((page, index) => (
                <ListItem key={index}>
                  <ListItemText primary={page.title} />
                  <IconButton onClick={() => handleOpenDialog('staticPage', index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => {
                    const newPages = [...staticPages];
                    newPages.splice(index, 1);
                    setStaticPages(newPages);
                  }}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <Button startIcon={<AddIcon />} onClick={() => handleOpenDialog('staticPage')}>
              Add Static Page
            </Button>
          </Paper>
        </Grid>

        {/* FAQ */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              FAQ
            </Typography>
            <List>
              {faq.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item.question} secondary={item.answer} />
                  <IconButton onClick={() => handleOpenDialog('faq', index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => {
                    const newFaq = [...faq];
                    newFaq.splice(index, 1);
                    setFaq(newFaq);
                  }}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <Button startIcon={<AddIcon />} onClick={() => handleOpenDialog('faq')}>
              Add FAQ Item
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{`${editIndex === -1 ? 'Add' : 'Edit'} ${dialogType}`}</DialogTitle>
        <DialogContent>
          {renderDialog()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SettingsPage;