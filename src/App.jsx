import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light modes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Define light and dark themes
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1976d2", // Set primary color globally
      },
    },
    typography: {
      fontFamily: "cursive",
      button: {
        textTransform: "none", // Disable uppercase for buttons
        fontSize: "0.8rem", // Decrease button font size
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999, // Make buttons round
          },
        },
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2", // Set primary color globally
      },
    },
    typography: {
      fontFamily: "cursive",
      button: {
        textTransform: "none", // Disable uppercase for buttons
        fontSize: "0.8rem", // Decrease button font size
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999, // Make buttons round
          },
        },
      },
    },
  });

  // Use the currently selected theme
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Wrap your components with Router */}
      <Navbar />
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      <Parent />
    </ThemeProvider>
  );
};

export default App;
