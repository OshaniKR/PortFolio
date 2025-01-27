import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        {/* Website Title or Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Oshani Ranathunga
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Use Link for React Router navigation */}
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button color="inherit" sx={{ color: 'white' }}>About</Button>
          </Link>
          <Link to="/skills" style={{ textDecoration: 'none' }}>
            <Button color="inherit" sx={{ color: 'white' }}>Skills</Button>
          </Link>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Button color="inherit" sx={{ color: 'white' }}>Projects</Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button color="inherit" sx={{ color: 'white' }}>Contact</Button>
          </Link>
        </Box>

        {/* Profile Avatar */}
        <Avatar 
          alt="Profile Picture" 
          src="/src/assets/Oshani_23.jpg"  // Add your image URL here
          sx={{ width: 40, height: 40, ml: 2 }}  // Using sx for styling (margin-left of 2)
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
