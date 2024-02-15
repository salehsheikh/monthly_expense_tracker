import React from "react";
import { IconButton } from "@mui/material";
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from "@mui/icons-material";

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <IconButton onClick={onToggle} sx={{ position: "absolute", right: "20px", top: "20px" }}>
      {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default DarkModeToggle;
