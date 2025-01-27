import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <AppBar
      position="fixed" // Make the header fixed
      sx={{ backgroundColor: "black", zIndex: 1100 }} // Ensure it stays above other elements
    >
      <Toolbar>
        {/* Website Title or Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Oshani Ranathunga
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            sx={{ color: "white" }}
            onClick={() => handleScroll("about")} // Scroll to the About section
          >
            About
          </Button>
          <Button
            color="inherit"
            sx={{ color: "white" }}
            onClick={() => handleScroll("skills")} // Scroll to the Skills section
          >
            Skills
          </Button>
          <Button
            color="inherit"
            sx={{ color: "white" }}
            onClick={() => handleScroll("projects")} // Scroll to the Projects section
          >
            Projects
          </Button>
          <Button
            color="inherit"
            sx={{ color: "white" }}
            onClick={() => handleScroll("contact")} // Scroll to the Contact section
          >
            Contact
          </Button>
        </Box>

        {/* Profile Avatar */}
        <Avatar
          alt="Profile Picture"
          src="/src/assets/Oshani_23.jpg" // Add your image URL here
          sx={{ width: 40, height: 40, ml: 2 }} // Using sx for styling (margin-left of 2)
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
