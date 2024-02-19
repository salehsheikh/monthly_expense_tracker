import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar component={Box} display="flex" flexWrap="wrap" justifyContent="start">
      <Typography variant="h6"  sx={{ flexGrow: 0.5 }}>
  Expense Tracker
</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
