import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion"; // Import framer-motion
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

function Contact() {
  // Generate random positions for the animated particles
  const createParticles = (num) => {
    const particles = [];
    for (let i = 0; i < num; i++) {
      const particle = {
        id: i,
        x: Math.random() * 100, // Random X position
        y: Math.random() * 100, // Random Y position
        size: Math.random() * 5 + 5, // Random size of particles
        delay: Math.random() * 3, // Delay for animation
      };
      particles.push(particle);
    }
    return particles;
  };

  const particles = createParticles(25); // Create 25 animated particles

  return (
    <Container
      maxWidth={false} // Full width
      sx={{
        height: "100vh", // Full viewport height
        width: "100%",
        marginTop: 0,
        background: "linear-gradient(135deg, #1d1b2e, #161421)", // Dark gradient for the background
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
      {/* Animated Particles */}
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
            background: "rgba(255, 255, 255, 0.5)", // Soft white color
          }}
          animate={{
            x: ["-100vw", "100vw"], // Move horizontally across the screen
            y: ["-100vh", "100vh"], // Move vertically across the screen
            opacity: [0.5, 1, 0.5], // Fade in and out
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10 + Math.random() * 10, // Randomized duration for each particle
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Title Section */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
          zIndex: 1,
          color: "#fff",
        }}
      >
        Get in Touch
      </Typography>

      {/* Contact Details (Cards in a row) */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          zIndex: 1,
        }}
      >
        <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, #ff77e9, transparent)",
          filter: "blur(70px)",
        }}
      />
        {/* Phone Card */}
        <Card sx={{ width: 250, backgroundColor: "#2B3090", color: "#fff" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <FaPhoneAlt size={24} color="#fff" />
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              Phone
            </Typography>
            <Typography variant="body2">
              Call us for any inquiries or assistance.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              <strong>+94 71 123 4567</strong>
            </Typography>
          </CardContent>
        </Card>

        {/* Email Card */}
        <Card sx={{ width: 250, backgroundColor: "#2B3090", color: "#fff" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <FaEnvelope size={24} color="#fff" />
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              Email
            </Typography>
            <Typography variant="body2">
              Feel free to drop us an email for any queries.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              <strong>oshani@example.com</strong>
            </Typography>
          </CardContent>
        </Card>

        {/* GitHub Card */}
        <Card sx={{ width: 250, backgroundColor: "#2B3090", color: "#fff" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <FaGithub size={24} color="#fff" />
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              GitHub
            </Typography>
            <Typography variant="body2">
              Explore our code repositories and projects.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                }}
              >
                github.com/yourusername
              </a>
            </Typography>
          </CardContent>
        </Card>

        {/* LinkedIn Card */}
        <Card sx={{ width: 250, backgroundColor: "#2B3090", color: "#fff" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <FaLinkedin size={24} color="#fff" />
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              LinkedIn
            </Typography>
            <Typography variant="body2">
              Connect with us on LinkedIn for networking.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                }}
              >
                linkedin.com/in/yourusername
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Contact;
