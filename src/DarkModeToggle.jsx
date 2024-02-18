import React from "react";
import { IconButton } from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <IconButton
      onClick={onToggle}
      sx={{ position: "absolute", right: "20px", top: "20px" }}
    >
      {darkMode ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  );
};

export default DarkModeToggle;
