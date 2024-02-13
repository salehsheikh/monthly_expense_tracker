import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = ({ handleBudgetChange, handleSetBudget }) => {
  return (
    <div>
      <TextField id="outlined-basic" label="Enter Budget" variant="outlined" onChange={handleBudgetChange} />
      <Button variant="contained" onClick={handleSetBudget}>Set Budget</Button>
    </div>
  );
};

export default Form;
