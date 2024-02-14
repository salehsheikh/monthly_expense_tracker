import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import BarChartIcon from '@mui/icons-material/BarChart';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button key="Home">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="AddExpense">
          <ListItemIcon><AddIcon /></ListItemIcon>
          <ListItemText primary="Add Expense" />
        </ListItem>
        <ListItem button key="UpdateBudget">
          <ListItemIcon><UpdateIcon /></ListItemIcon>
          <ListItemText primary="Update Budget" />
        </ListItem>
        <ListItem button key="ViewStatistics">
          <ListItemIcon><BarChartIcon /></ListItemIcon>
          <ListItemText primary="View Statistics" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
