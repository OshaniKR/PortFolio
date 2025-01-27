import React, { useEffect, useState } from "react";
import { Container, Grid, Avatar, Button } from "@mui/material";
import "../theme.css";

const About = () => {
  const fullText = "Oshani Ranathunga";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        currentIndex < fullText.length
          ? prev + fullText[currentIndex]
          : fullText.slice(0, currentIndex - fullText.length)
      );
      currentIndex++;

      if (currentIndex > fullText.length * 2) {
        currentIndex = 0;
        setDisplayedText("");
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      maxWidth={true} // This will make the container take full width
      sx={{
        height: "100vh", // Full viewport height
        width: "100%",
        marginTop: 0, // No space between navbar and container
        marginLeft:0,
        marginRight:0,
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
            <h4
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "20px",
                lineHeight: "1.2",
              }}
            >
              Hi! I'm{" "}
              <span
                className="animated-text"
                style={{
                  color: "#ff77e9", // Vibrant text color
                  display: "inline-block",
                }}
              >
                {displayedText}
              </span>
            </h4>
            <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
            Hi, I'm Oshani Ranathunga, an undergraduate student at the Faculty of Engineering, University of Ruhuna. 
    I'm passionate about technology and software development, with a keen interest in programming, web development, and machine learning. 
    I enjoy working on challenging projects and solving complex problems. When I'm not coding, I love to explore new technologies and 
    collaborate with like-minded individuals to learn and grow.
    My goal is to become a skilled software engineer and contribute to the tech community by building innovative solutions.
            </p>
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
            >
              Let's Connect
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
