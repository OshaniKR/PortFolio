import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import Footer from "./Footer";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_pnlne5p", // Replace with your Service ID
        "template_i59qwat", // Replace with your Template ID
        e.target, 
        "Xm30BuCg_i2M9QqF0" // Replace with your User ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          // Clear all fields on success
          setFormData({ user_name: "", user_email: "", message: "" });
          e.target.reset(); // Reset form fields
        },
        (error) => {
          alert("Error sending message, please try again.");
        }
      );
  };
  
  

  const createParticles = (num) => {
    const particles = [];
    for (let i = 0; i < num; i++) {
      const particle = {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 5,
        delay: Math.random() * 3,
      };
      particles.push(particle);
    }
    return particles;
  };

  const particles = createParticles(25);

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "auto",
        width: "100%",
        marginTop: 0,
        background: "linear-gradient(135deg, #1d1b2e, #161421)",
        color: "#fff",
        //padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        
        justifyContent: "center",
      }}
    >
      {/* Background and Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: "absolute",
            top: `${particle.y}vh`,
            left: `${particle.x}vw`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.5)",
          }}
          animate={{
            x: ["-100vw", "100vw"],
            y: ["-100vh", "100vh"],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10 + Math.random() * 10,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

<div style={{ display: "flex", backgroundColor: "transparent",width: "100%" }}>
  {/* Left-aligned container */}
<div
  style={{
    width: "50%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e1e2e, #2b2b3b)", // Improved background
    position: "relative",
  }}
>
  <div style={{ textAlign: "center", width: "100%" }}>
  <Typography
  variant="h4"
  sx={{
    fontWeight: "bold",
    marginBottom: "20px",
    background: "linear-gradient(135deg, var(--primary-purple), var(--primary-pink))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Get in Touch
</Typography>


    {/* Contact Form */}
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        width: "100%",
        maxWidth: "600px", // Increased width
        position: "relative",
        paddingLeft:"50px",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Your Name"
        name="user_name"
        value={formData.name}
        onChange={handleChange}
        sx={{
          backgroundColor: "#2d2a4a",
          borderRadius: "8px",
          input: { color: "#fff" },
          width: "100%", // Increased width
          border: "1px solid #555", // Light border
          "&:focus-within": {
            borderColor: "#77aaff",
          },
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Your Email"
        name="user_email"
        value={formData.email}
        onChange={handleChange}
        sx={{
          backgroundColor: "#2d2a4a",
          borderRadius: "8px",
          input: { color: "#fff" },
          width: "100%", // Increased width
          border: "1px solid #555",
          "&:focus-within": {
            borderColor: "#77aaff",
          },
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={5} // Increased height
        sx={{
          backgroundColor: "#2d2a4a",
          borderRadius: "8px",
          textarea: { color: "#fff" },
          width: "100%",
          border: "1px solid #555",
          "&:focus-within": {
            borderColor: "#77aaff",
          },
        }}
      />
      <Button
  variant="contained"
  type="submit"
  sx={{
    background: "linear-gradient(135deg, #6a0dad, #ff69b4)", // Using your theme colors
    color: "var(--white)", // White text for contrast
    fontWeight: "bold",
    padding: "12px 24px",
    borderRadius: "8px",
    width: "100%", // Matches input width
    textTransform: "uppercase",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Adds subtle depth
    "&:hover": {
      background: "linear-gradient(135deg, #8a2be2, #c71585)", // Darker gradient on hover
    },
  }}
>
  SEND MESSAGE
</Button>

    </Box>
  </div>
</div>


  <div
  style={{
    width: "50%",
    height: "100vh", // Ensure the background image covers the full height
    backgroundImage: "url(assets/download.jfif')",
    backgroundSize: "cover", // Cover the entire div
    backgroundPosition: "center", // Center the image
  }}
>
  {/* Add any other content you want here */}
</div>
</div>


<Footer/>
    </Container>
  );
}

export default Contact;
