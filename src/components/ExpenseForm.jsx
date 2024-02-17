import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Paper,
  Box,
} from "@mui/material";

const ExpenseForm = ({ handleSetExpense }) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(""); // Renamed inputExpense to amount
  const [description, setDescription] = useState("");

  const handleAddExpense = () => {
    // Call the handleSetExpense function with expense data
    handleSetExpense({ category, amount: parseFloat(amount) });

    // Reset form fields
    setDate("");
    setCategory("");
    setAmount("");
    setDescription("");
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Paper elevation={0} sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Expense Form
      </Typography>
      <form>
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
              id="expense"
              label="Expense"
              type="number"
              value={amount} // Bind value to amount
              onChange={handleAmountChange} // Update amount on change
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
                <MenuItem value="transporation">Transporation</MenuItem>
                <MenuItem value="housing">Housing</MenuItem>
                <MenuItem value="bills/fee">Bills/fee</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="groceries">Groceries</MenuItem>
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddExpense}
                sx={{ bgcolor: "#121935" }}
              >
                Add expense
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ExpenseForm;
