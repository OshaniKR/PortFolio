import React from 'react';
import { Container, Typography } from "@mui/material";

function Project() {
  return (
    <Container
      maxWidth={true} // This will make the container take full width
      sx={{
        height: "100vh", // Full viewport height
        width: "100%",
        marginTop: 0, // No space between navbar and container
        background: "linear-gradient(135deg, #1d1b2e, #161421)", // Dark gradient
        color: "#fff", // Default text color
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Add some content inside the container */}
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Projects
      </Typography>
      <Typography variant="body1">
        Here are some of the projects that I have worked on:
      </Typography>
      <ul>
        <li>Project 1: E-Learning Platform</li>
        <li>Project 2: Social Media App</li>
        <li>Project 3: Personal Portfolio</li>
      </ul>
    </Container>
  );
}

export default Project;
