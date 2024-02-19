import React from "react";
import { TextField, Box, Typography, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";

const Form = ({
  handleBudgetChange,
  handleSetBudget,
  handleAmountChange,
  handleAddIncome,
  handleResetBudget,
  handleNameChange,
  incomeAmount,
  incomeName,
}) => {
  // Use useMediaQuery hook to check screen size
  
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      mt={2}
      ml={26}
    >
      <TextField
        sx={{ width: isSmallScreen ? "100%" : "50%", marginBottom: "8px" }} // Adjusted width based on screen size
        id="outlined-basic"
        label="Enter Budget"
        variant="outlined"
        type="number"
        onChange={handleBudgetChange}
      />
      <Button
        variant="contained"
        fontFamily={"cursive"}
        onClick={handleSetBudget}
        sx={{
          width: isSmallScreen ? "100%" : "10%", // Adjusted width based on screen size
          bgcolor: "#121935",
          marginTop: "8px",
        }}
      >
        Set Budget
      </Button>

      <Typography variant="h6" mt={2}>
       Update budget
      </Typography>
      <TextField
        sx={{ width: isSmallScreen ? "100%" : "50%", marginBottom: "25px" }} // Adjusted width based on screen size
        id="income-name"
        label="Income Name"
        variant="outlined"
        onChange={handleNameChange}
      />
      <TextField
        sx={{
          width: isSmallScreen ? "100%" : "50%",
          marginBottom: "16px", // Increased margin-bottom
        }}
        id="income-amount"
        label="Income Amount"
        variant="outlined"
        type="number"
        onChange={handleAmountChange}
      />
      <Button
        variant="contained"
        fontFamily={"cursive"}
        onClick={() => handleAddIncome(incomeName, incomeAmount)}
        sx={{
          width: isSmallScreen ? "100%" : "10%", // Adjusted width based on screen size
          bgcolor: "#1976d2",
          marginTop: "8px",
          marginBottom: "20px",
        }}
      >
        Add Income
      </Button>
      <Typography variant="h6" gutterBottom fontFamily={"cursive"}>
        Reset Your Budget
      </Typography>
      <Typography gutterBottom fontFamily={"cursive"}>
        Resets your budget back to 0
      </Typography>
      <Button
        variant="contained"
        onClick={handleResetBudget}
        sx={{
          width: isSmallScreen ? "100%" : "10%", // Adjusted width based on screen size
          bgcolor: "#f44336",
          marginTop: "12px",
        }}
      >
        Reset Budget
      </Button>
    </Box>
  );
};

export default Form;
