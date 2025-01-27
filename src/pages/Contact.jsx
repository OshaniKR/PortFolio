import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

function Contact() {
  return (
    <Container
      maxWidth={false} // Full width
      sx={{
        height: "100vh", // Full viewport height
        width: "100%",
        marginTop: 0,
        background: "linear-gradient(135deg, #1d1b2e, #161421)", // Dark gradient
        color: "#fff", // Default text color
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Title Section */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Get in Touch
      </Typography>

      {/* Contact Details */}
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <strong>Email:</strong> oshani@example.com
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> +94 71 123 4567
        </Typography>
      </Box>

      {/* Contact Form */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Your Name"
          sx={{
            backgroundColor: "#2d2a4a",
            borderRadius: "5px",
            input: { color: "#fff" },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Your Email"
          sx={{
            backgroundColor: "#2d2a4a",
            borderRadius: "5px",
            input: { color: "#fff" },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Your Message"
          multiline
          rows={4}
          sx={{
            backgroundColor: "#2d2a4a",
            borderRadius: "5px",
            textarea: { color: "#fff" },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4a90e2",
            color: "#fff",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#367bd1",
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
