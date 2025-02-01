import React from "react";
import { Container, Typography, Grid, Chip, Tooltip, Button } from "@mui/material";
import {
  FaJs,
  FaReact,
  FaDocker,
  FaPython,
  FaDatabase,
  FaJava,
  FaCertificate,
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

  return (
    <Container
      maxWidth={true}
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
        Skills
      </Typography>

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
    </Container>
  );
}

export default Skills;
