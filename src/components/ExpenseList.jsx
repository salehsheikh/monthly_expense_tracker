import React from "react";
import * as XLSX from "xlsx"; 
import {
  Typography,
  List,
  ListItem,
  Button,
  Grid,
} from "@mui/material";
import { FileDownloadOutlined } from "@mui/icons-material";

const ExpenseList = ({ expenses }) => {
  const handleExportExpenses = () => {
    // Convert expenses data to Excel format
    const ws = XLSX.utils.json_to_sheet(expenses);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Expenses");
    // Save the Excel file
    XLSX.writeFile(wb, "expenses.xlsx");
  };
  return (
    <div style={{marginLeft:"50px"}}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography variant="h5">
            Expense List
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" onClick={handleExportExpenses}>
          <FileDownloadOutlined/> export
          </Button>
        </Grid>
      </Grid>
      {expenses.length === 0 ? (
        <Typography variant="body1">No expenses recorded yet.</Typography>
      ) : (
        <List>
          {expenses.length > 0 && (
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography variant="subtitle1">Date:</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1">Category:</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="subtitle1">Amount:</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Description:</Typography>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          )}
          {expenses.map((expense,) => (
            <ListItem key={expense.id}>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Typography>{expense.date}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>{expense.category}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>${expense.amount.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>{expense.description}</Typography>
                </Grid>
               
              </Grid>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default ExpenseList;
