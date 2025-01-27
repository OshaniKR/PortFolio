import React, { useState } from "react";
import { Container, Typography, Card, CardContent, CardMedia, Button, Grid, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project() {
  const [projects, setProjects] = useState([
    {
      title: "Ayumi E-Learning Platform",
      description: "The Ayumi E-Learning Platform is an ongoing project that provides secure course access, quizzes, video lectures, and a discussion forum.",
      image: "src/assets/Ayumi.jfif",
      alt: "Project 1",
      link: "https://github.com/NinaMadu/Ayumi-eLearning",
    },
    {
      title: "Machine Learning",
      description: "A machine learning model predicting cryptocurrency prices using historical data and advanced algorithms to forecast market trends and assist traders.",
      image: "src/assets/bitcoin.jfif",
      alt: "Project 2",
      link: "https://github.com/OshaniKR/CryptoCurrency-Price-Prediction",
    },
    {
      title: "Personal Portfolio",
      description: "A personal portfolio website showcasing my skills and projects.",
      image: "/path-to-image/project3.jpg",
      alt: "Project 3",
      link: "/project3",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app with real-time updates.",
      image: "/path-to-image/project4.jpg",
      alt: "Project 4",
      link: "/project4",
    },
    {
      title: "Chat Application",
      description: "A real-time messaging application with features like group chats and file sharing.",
      image: "/path-to-image/project5.jpg",
      alt: "Project 5",
      link: "/project5",
    },
    {
      title: "Task Manager",
      description: "A task management app to organize and track tasks efficiently.",
      image: "/path-to-image/project6.jpg",
      alt: "Project 6",
      link: "/project6",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of cards to display at a time

  // Function to move forward
  const goForward = () => {
    if (currentIndex + itemsPerPage < projects.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  // Function to move backward
  const goBackward = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  // Slice the projects array to display only the current set of cards
  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        width: "100%",
        marginTop: 0,
        background: "linear-gradient(135deg, #1d1b2e, #161421)",
        color: "#fff",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Page Title */}
      <Typography
  variant="h4"
  sx={{
    marginTop: "40px",
    marginBottom: "20px",
    textAlign: "center",
    background: "linear-gradient(135deg,rgb(213, 105, 193),rgb(80, 63, 153))", // Gradient background with theme colors
    WebkitBackgroundClip: "text", // Make the background apply only to the text
    color: "transparent", // Make text color transparent to see the gradient
    fontWeight: "bold", // Bold font
    fontSize: "2.5rem", // Larger font size
    textShadow: "2px 2px 5px rgba(255, 255, 255, 0.4)", // Subtle text shadow
    transition: "transform 0.3s ease-in-out", // Add smooth transition on hover
    "&:hover": {
      transform: "scale(1.1)", // Slightly enlarge the text on hover for effect
    },
  }}
>
  My Projects
</Typography>

      

      {/* Navigation Buttons */}
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

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center">
        {visibleProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#2d2a4a",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
                height: "425px",
                width: "100%",
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={project.image}
                alt={project.alt}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                  {project.description}
                </Typography>
                <IconButton
                sx={{ color: "#fff" }}
                href={project.link} // Assuming you have a GitHub link in your project data
                target="_blank"
                rel="noopener noreferrer"
              >
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
