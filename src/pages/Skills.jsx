import React from "react";
import { Container, Typography, Grid, Box, Button, Chip, Tooltip } from "@mui/material";
import {
  FaJs,
  FaReact,
  FaDocker,
  FaPython,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { SiFlutter, SiMysql, SiCplusplus, SiDart } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: <FaJs size={80} color="#f7df1e" />,
      certificate: "https://example.com/javascript-certificate",
    },
    {
      name: "React",
      icon: <FaReact size={80} color="#61dafb" />,
      certificate: "https://example.com/react-certificate",
    },
    {
      name: "Python",
      icon: <FaPython size={80} color="#306998" />,
      certificate: "https://example.com/python-certificate",
    },
    {
      name: "MongoDB",
      icon: <FaDatabase size={80} color="#4f5b62" />,
      certificate: "https://example.com/mongodb-certificate",
    },
    {
      name: "MySQL",
      icon: <SiMysql size={80} color="#00758f" />,
      certificate: "https://example.com/mysql-certificate",
    },
    {
      name: "Java",
      icon: <FaJava size={80} color="#f8981d" />,
      certificate: "https://example.com/java-certificate",
    },
    {
      name: "Docker",
      icon: <FaDocker size={80} color="#2496ed" />,
      certificate: "https://example.com/docker-certificate",
    },
    {
      name: "Flutter",
      icon: <SiFlutter size={80} color="#02569b" />,
      certificate: "https://example.com/flutter-certificate",
    },
    {
      name: "Dart",
      icon: <SiDart size={80} color="#00B4B6" />,
      certificate: "https://example.com/dart-certificate",
    },
    {
      name: "C++",
      icon: <SiCplusplus size={80} color="#00599c" />,
      certificate: "https://example.com/cpp-certificate",
    },
  ];

  const competitions = [
    {
      title: "Hackathon Winner",
      description: "Participated and won the first prize at a university-level hackathon.",
      image: "https://example.com/hackathon-image.jpg", // Add your image URL here
    },
    {
      title: "Coding Challenge Runner-Up",
      description: "Placed second in a national-level coding challenge.",
      image: "https://example.com/coding-challenge-image.jpg", // Add your second competition image URL here
    },
  ];
  
  const clubMembers = [
    {
      title: "Club President",
      description: "Led the university’s software development club and organized workshops.",
      image: "https://example.com/club-president-image.jpg", // Add your club president image URL here
    },
    {
      title: "Club Vice President",
      description: "Assisted in managing club activities and organizing events.",
      image: "https://example.com/club-vp-image.jpg", // Add another club member image URL here
    },
  ];
  
  const volunteering = [
    {
      title: "Volunteer Teacher",
      description: "Taught programming basics to local high school students as part of a volunteering program.",
      image: "https://example.com/volunteering-image.jpg", // Add your volunteering image URL here
    },
    {
      title: "Mehewara Volunteer",
      description: "Contributed as a volunteer at the Mehewara social outreach program.",
      image: "https://example.com/mehewara-image.jpg", // Add your Mehewara volunteering image URL here
    },
  ];
  
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
          bottom: "10%",
          left: "5%",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, #ff77e9, transparent)",
          filter: "blur(70px)",
        }}
      />

      {/* Page Title */}
      <Typography
        variant="h4"
        sx={{
          marginTop: "40px",
          marginBottom: "20px",
          textAlign: "center",
          background: "linear-gradient(135deg, rgb(232, 209, 228), rgb(80, 63, 153))",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          fontSize: "2.5rem",
          textShadow: "2px 2px 5px rgba(255, 255, 255, 0.4)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        Skills & Achievements
      </Typography>

      {/* Skills Section */}
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              icon={React.cloneElement(skill.icon, { size: 80 })}
              label={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span>{skill.name}</span>
                  <Tooltip title={`View Certificate: ${skill.name}`} arrow>
                    <Button
                      href={skill.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "#ffd700",
                        color: "#000",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#fcd535",
                        },
                      }}
                    >
                      View Certificate
                    </Button>
                  </Tooltip>
                </div>
              }
              sx={{
                fontSize: "1.2rem",
                padding: "15px 20px",
                color: "#fff",
                background: "linear-gradient(135deg, #2B3090, #202552)",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  background: "linear-gradient(135deg, #202552, #2B3090)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Extracurricular Activities Section */}
      <Box sx={{ marginTop: "40px" }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            background: "linear-gradient(135deg, rgb(232, 209, 228), rgb(80, 63, 153))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
            fontSize: "2rem",
            textShadow: "2px 2px 5px rgba(255, 255, 255, 0.4)",
            marginBottom: "20px",
          }}
        >
          Competitions
        </Typography>
        <Grid container spacing={3} justifyContent="center">
  {competitions.map((activity, index) => (
    <Grid item key={index}>
      <Box
        sx={{
          border: "1px solid #fff",
          padding: "20px",
          borderRadius: "8px",
          background: "rgba(0, 0, 0, 0.6)",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <img
          src={activity.image}
          alt={activity.title}
          style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "10px" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {activity.title}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
      </Box>
    </Grid>
  ))}
</Grid>

        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            background: "linear-gradient(135deg, rgb(232, 209, 228), rgb(80, 63, 153))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
            fontSize: "2rem",
            textShadow: "2px 2px 5px rgba(255, 255, 255, 0.4)",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          Club Members
        </Typography>
        <Grid container spacing={3} justifyContent="center">
  {clubMembers.map((activity, index) => (
    <Grid item key={index}>
      <Box
        sx={{
          border: "1px solid #fff",
          padding: "20px",
          borderRadius: "8px",
          background: "rgba(0, 0, 0, 0.6)",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <img
          src={activity.image}
          alt={activity.title}
          style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "10px" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {activity.title}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
      </Box>
    </Grid>
  ))}
</Grid>

        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            background: "linear-gradient(135deg, rgb(232, 209, 228), rgb(80, 63, 153))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
            fontSize: "2rem",
            textShadow: "2px 2px 5px rgba(255, 255, 255, 0.4)",
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          Volunteering
        </Typography>
        <Grid container spacing={3} justifyContent="center">
  {volunteering.map((activity, index) => (
    <Grid item key={index}>
      <Box
        sx={{
          border: "1px solid #fff",
          padding: "20px",
          borderRadius: "8px",
          background: "rgba(0, 0, 0, 0.6)",
          textAlign: "center",
          color: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <img
          src={activity.image}
          alt={activity.title}
          style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "10px" }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {activity.title}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
      </Box>
    </Grid>
  ))}
</Grid>
      </Box>
    </Container>
  );
}

export default Skills;
