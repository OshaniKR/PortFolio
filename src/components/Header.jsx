import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

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
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#skills">
            Skills
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
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
