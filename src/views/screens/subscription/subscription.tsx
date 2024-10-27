import React, { useState, useEffect } from 'react';
import {
  ScreenContainer,
  SubscriptionPlan,
  AnalyticsData,
  Header,
  Section,
  SectionTitle,
  Button,
  Table,
  Th,
  Td,
} from './styles';
import TickPlacementBars from '../../components/chart/chart';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button as MuiButton,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Add as AddIcon, Delete as DeleteIcon } from '@material-ui/icons';
import { createPlan, fetchPlan, updatePlan, deletePlan } from '../../../apis/users'; // Import the login API

const SubscriptionScreen: React.FC = () => {
  const [plans, setPlans] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalSubscribers: 0,
    monthlyRevenue: 0,
    popularPlan: '',
  });

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);

  const [newPlan, setNewPlan] = useState<any>({
    id: '',
    plan_name: '',
    duration: 0,
    price: 0,
    // benefits: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetchPlan(); // Await the response
          console.log(response.data); // Log the resolved responseset
          setPlans(response.data)
      } catch (error) {
          console.error("Error fetching plan:", error); // Log any errors
      }
  };

  fetchData();
    // setPlans([
    //   { id: '1', name: 'Basic', duration: 30, cost: 9.99, benefits: ['Feature 1', 'Feature 2'] },
    //   { id: '2', name: 'Pro', duration: 30, cost: 19.99, benefits: ['Feature 1', 'Feature 2', 'Feature 3'] },
    //   { id: '3', name: 'Enterprise', duration: 365, cost: 199.99, benefits: ['All Features'] },
    // ]);

    setAnalytics({
      totalSubscribers: 1000,
      monthlyRevenue: 15000,
      popularPlan: 'Pro',
    });
  }, []);

  const handleCreatePlan = () => {
    setOpenCreateModal(true);
  };

  const handleEditPlan = (plan: any) => {
    setSelectedPlan(plan);
    setNewPlan(plan);
    setOpenEditModal(true);
  };

  const handleDeletePlan = (plan: any) => {
    setSelectedPlan(plan);
    setOpenDeleteModal(true);
  };

  const handleCloseModals = () => {
    setOpenCreateModal(false);
    setOpenEditModal(false);
    setOpenDeleteModal(false);
    setSelectedPlan(null);
    setNewPlan({
      id: '',
      plan_name: '',
      duration: 0,
      price: 0,
      // benefits: [],
    });
  };

  const handleSavePlan = async() => {
    if (openCreateModal) {
      // Create new plan logic
      setPlans([...plans, { ...newPlan, id: Date.now().toString() }]);

      const { id, ...newPlanWithoutId } = newPlan;

      console.log(newPlanWithoutId, "checkking new field")

      const response = await createPlan(newPlanWithoutId)
      console.log(response)
    } else if (openEditModal && selectedPlan) {
      // Edit plan logic
      setPlans(plans.map(plan => plan.id === selectedPlan.id ? newPlan : plan));
      const { id,name, ...newPlanWithoutId } = newPlan;
      const response = await updatePlan(newPlan.id, newPlanWithoutId)
      console.log(response)
    }
    handleCloseModals();
  };

  const handleConfirmDelete = async() => {
    if (selectedPlan) {
      // Delete plan logic
      setPlans(plans.filter(plan => plan.id !== selectedPlan.id));
      const response = await deletePlan(selectedPlan.id)
    }
    handleCloseModals();
  };

  const handleAddBenefit = () => {
    setNewPlan({ ...newPlan, benefits: [...newPlan.benefits, ''] });
  };

  const handleRemoveBenefit = (index: number) => {
    const newBenefits = newPlan.benefits.filter((_: any, i: any) => i !== index);
    setNewPlan({ ...newPlan, benefits: newBenefits });
  };

  const handleBenefitChange = (index: number, value: string) => {
    const newBenefits = [...newPlan.benefits];
    newBenefits[index] = value;
    setNewPlan({ ...newPlan, benefits: newBenefits });
  };

  return (
    <ScreenContainer>
      <Section>
        <SectionTitle>Subscription Settings</SectionTitle>
        <Button onClick={handleCreatePlan} style={{backgroundColor:"black", marginTop:"15px", marginBottom:"15px"}}>Create New Plan</Button>
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>Duration (days)</Th>
              <Th>Price ($)</Th>
              {/* <Th>Benefits</Th> */}
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan: any) => (
              <tr key={plan.id}>
                <Td>{plan.name}</Td>
                <Td>{plan.duration}</Td>
                <Td>{plan.price.toFixed(2)}</Td>
                {/* <Td>{plan.benefits.join(', ')}</Td> */}
                <Td>
                  <Button onClick={() => handleEditPlan(plan)}>Edit</Button>
                  <Button onClick={() => handleDeletePlan(plan)} style={{backgroundColor:"red"}}>Delete</Button>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      <Section>
        <TickPlacementBars />
      </Section>

      {/* Create/Edit Plan Modal */}
      <Dialog open={openCreateModal || openEditModal} onClose={handleCloseModals}>
        <DialogTitle>{openCreateModal ? 'Create New Plan' : 'Edit Plan'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Plan Name"
            type="text"
            fullWidth
            value={newPlan.plan_name}
            onChange={(e) => setNewPlan({ ...newPlan, plan_name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Duration (days)"
            type="number"
            fullWidth
            value={newPlan.duration}
            onChange={(e) => setNewPlan({ ...newPlan, duration: parseInt(e.target.value) })}
          />
          <TextField
            margin="dense"
            label="Cost ($)"
            type="number"
            fullWidth
            value={newPlan.price}
            onChange={(e) => setNewPlan({ ...newPlan, price: parseFloat(e.target.value) })}
          />
          {/* <List>
            {newPlan.benefits.map((benefit, index) => (
              <ListItem key={index}>
                <ListItemText>
                  <TextField
                    fullWidth
                    value={benefit}
                    onChange={(e) => handleBenefitChange(index, e.target.value)}
                    placeholder={`Benefit ${index + 1}`}
                  />
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => handleRemoveBenefit(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List> */}
          {/* <MuiButton onClick={handleAddBenefit} startIcon={<AddIcon />}>
            Add Benefit
          </MuiButton> */}
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleCloseModals} color="primary">
            Cancel
          </MuiButton>
          <MuiButton onClick={handleSavePlan} color="primary">
            Save
          </MuiButton>
        </DialogActions>
      </Dialog>

      {/* Delete Plan Modal */}
      <Dialog open={openDeleteModal} onClose={handleCloseModals}>
        <DialogTitle>Delete Plan</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the plan "{selectedPlan?.name}"?
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleCloseModals} color="primary">
            Cancel
          </MuiButton>
          <MuiButton onClick={handleConfirmDelete} color="secondary">
            Delete
          </MuiButton>
        </DialogActions>
      </Dialog>
    </ScreenContainer>
  );
};

export default SubscriptionScreen;