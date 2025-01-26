import React, { useEffect, useState } from 'react';
import { Container, Grid, Avatar } from '@mui/material';

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

      // Restart animation after completing one full cycle
      if (currentIndex > fullText.length * 2) {
        currentIndex = 0;
        setDisplayedText("");
      }
    }, 200); // Adjust the speed of iteration

    return () => clearInterval(interval);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          {/* Your Image in a Circle */}
          <Avatar
            alt="Profile"
            src="src/assets/Oshani_23.jpg" // Replace with your image path
            sx={{
              width: 450,
              height: 450,
              border: "3px solid #fff",
              boxShadow: 3,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* Your Introduction and Bio */}
          <h4 style={{ fontSize: "1.8rem", color: "#2B3090", fontWeight: "bold" }}>
            Hello, I'm{" "}
            <span
              className="animated-text"
              style={{
                display: "inline-block",
                animation: "fadeInMove 2s ease-in-out",
              }}
            >
              {displayedText}
            </span>
          </h4>

          {/* Custom CSS */}
          <style>
            {`
              @keyframes fadeInMove {
                0% { opacity: 0; transform: translateY(-10px); }
                50% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(10px); }
              }

              .animated-text {
                letter-spacing: 2px; /* Add spacing between letters */
                color: #2B3090; /* Customize text color */
              }
            `}
          </style>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
