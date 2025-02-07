import React, { useState } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project() {
  const [projects, setProjects] = useState([
   
    {
      title: "Machine Learning",
      description: "A machine learning model predicting cryptocurrency prices using historical data and advanced algorithms to forecast market trends and assist traders.",
      image: "assets/bitcoin.jfif",
      alt: "Project 2",
      link: "https://github.com/OshaniKR/CryptoCurrency-Price-Prediction",
    },
    {
      title: "MERN Social Media Application",
      description: "A MERN-based social media app offering posts, comments, likes, secure authentication, user profiles, and community engagement features.",
      image: "assets/mern.jfif",
      alt: "Project 3",
      link: "https://github.com/OshaniKR/mernsocial",
    },
    {
      title: "Waste Management System- MySQL",
      description: "A Waste Management System powered by MySQL for efficient tracking, scheduling, and management of waste collection and disposal processes.",
      image: "assets/Waste.jfif",
      alt: "Project 5",
      link: "https://github.com/OshaniKR/Waste-Management-System-MySQL",
    },
    {
      title: "Social Media Mobile Application for pet lovers",
      description: "A mobile social media app for pet lovers to share posts, connect with others, explore communities, and celebrate pets together.",
      image: "assets/PetLovers.jfif",
      alt: "Project 4",
      link: "https://github.com/OshaniKR/Mobile-SocialApp",
    },
    {
      title: "Ayumi E-Learning Platform",
      description: "The Ayumi E-Learning Platform is an ongoing project that provides secure course access, quizzes, video lectures, and a discussion forum.",
      image: "assets/AyumiN.png",
      alt: "Project 1",
      link: "https://github.com/NinaMadu/Ayumi-eLearning",
    },
    
    {
      title: "Waste Management System - Data Structures and Algorithms",
      description: "A Waste Management System uses data structures and algorithms for efficient waste collection, segregation, and disposal.",
      image: "assets/WasteDataStructures.jfif",
      alt: "Project 6",
      link: "https://github.com/OshaniKR/WasteManagement",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const goForward = () => {
    if (currentIndex + itemsPerPage < projects.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const goBackward = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "auto",
        width: "100%",
        marginTop: 0,
        background: "linear-gradient(135deg, #1d1b2e, #161421)",
        color: "#fff",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
       <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, #ff77e9, transparent)",
          filter: "blur(70px)",
        }}
      />
      <Typography
        variant="h4"
        sx={{
          marginTop: "40px",
          marginBottom: "20px",
          textAlign: "center",
          background: "linear-gradient(135deg, var(--primary-purple), var(--primary-pink))",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          fontSize: "2.5rem",
          textShadow: "2px 2px 5px rgba(155, 48, 255, 0.4)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        My Projects
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center", marginBottom: "20px", maxWidth: "800px", margin: "0 auto" }}>
        Explore my projects, where I bring ideas to life through technology! From AI and Machine Learning to Web Development and Software Engineering, 
        each project reflects my passion for problem-solving and innovation. Dive in to see how I build solutions that make an impact.
      </Typography>

      <Grid container justifyContent="space-between" sx={{ marginBottom: "20px" }}>
        <Grid item>
          <IconButton onClick={goBackward} disabled={currentIndex === 0}>
            <ArrowBackIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={goForward} disabled={currentIndex + itemsPerPage >= projects.length}>
            <ArrowForwardIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center">
        {visibleProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ backgroundColor: "#2d2a4a", color: "#fff", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.2)", height: "425px", width: "100%" }}
            >
              <CardMedia component="img" height="250" image={project.image} alt={project.alt} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{project.title}</Typography>
                <Typography variant="body2" sx={{ marginBottom: "10px", fontSize: "0.9rem", color: "#ddd" }}>{project.description}</Typography>
                <IconButton sx={{ color: "#fff" }} href={project.link} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Project;