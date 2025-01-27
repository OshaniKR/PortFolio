import React from 'react'
import { Container, Typography } from "@mui/material"; 

function Contact() {
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
          
        </Container>
  )
}

export default Contact
