import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid, Typography,  Paper, Box } from '@mui/material';

const ExpenseForm = () => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { date, amount, category, description });
    // You can add your logic to submit the form data
  };

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>Expense Form</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                id="date"
                label="Date"
                type="date"
                value={date}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="amount"
              label="Amount"
              type="number"
              value={amount}
              onChange={handleAmountChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={category}
                onChange={handleCategoryChange}
              >
                <MenuItem value="food">Food</MenuItem>
                <MenuItem value="transportation">Transportation</MenuItem>
                <MenuItem value="housing">Housing</MenuItem>
                {/* Add more categories as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="description"
              label="Description"
              multiline
              rows={2}
              value={description}
              onChange={handleDescriptionChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="right">
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ExpenseForm;
