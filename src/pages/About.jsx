import React from "react";
import { Container, Grid, Avatar, Button, Typography } from "@mui/material";
import Typewriter from 'typewriter-effect';
import "../theme.css";

const About = () => {
  return (
    <Container
      maxWidth={true} // This will make the container take full width
      sx={{
        height: "100vh", // Full viewport height
        width: "100%",
        marginTop: 0, // No space between navbar and container
        marginLeft: 0,
        marginRight: 0,
        background: "linear-gradient(135deg, #1d1b2e, #161421)", // Dark gradient
        color: "#fff", // Default text color
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Space-Themed Accents */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "100px",
          height: "100px",
          background: "radial-gradient(circle, #6e5bd0, transparent)",
          filter: "blur(50px)",
        }}
      />
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
      <Grid container spacing={4} alignItems="center" sx={{ height: "100%" }}>
        {/* Profile Image */}
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Avatar
            alt="Profile"
            src="src/assets/Oshani_23.jpg"
            sx={{
              width: 450,
              height: 450,
              border: "5px solid #fff",
              boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
            }}
          />
        </Grid>
        

        {/* Animated Text and Content */}
        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px", lineHeight: "1.2" }}>
              Hi! I'm{" "}
              <span className="animated-text" style={{ color: "#ff77e9", display: "inline-block" }}>
                <Typewriter
                  options={{
                    strings: ['Oshani Ranathunga'],
                    autoStart: true,
                    loop: true, // This makes the typing effect loop
                    pauseFor: 200, // Pause for 2 seconds before deleting
                    deleteSpeed: 200, // Slower speed of deleting the text
                    delay: 150, // Slower speed of typing the text
                  }}
                />
              </span>
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: "1.8" }}>
              Hi, I'm Oshani Ranathunga, an undergraduate student at the Faculty of Engineering, University of Ruhuna. 
              I'm passionate about technology and software development, with a keen interest in programming, web development, and machine learning. 
              I enjoy working on challenging projects and solving complex problems. When I'm not coding, I love to explore new technologies and 
              collaborate with like-minded individuals to learn and grow. My goal is to become a skilled software engineer and contribute to the tech community by building innovative solutions.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#ff77e9",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "30px",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#e065cc",
                },
              }}
              component="a" // This makes the button behave like a link
              href="https://drive.google.com/drive/folders/1TwWImXP8AnD37UmuzH9hd0rl73xKvmaH?usp=drive_link" // Replace with your CV's file path or URL
              download="Oshani_Ranathunga_CV.pdf" // This will prompt the download with the given filename
            >
              Download My CV
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
