import React from "react";
import { Container, Typography, Grid, Chip } from "@mui/material"; 
import { FaJs, FaReact, FaDocker, FaPython, FaDatabase, FaJava, FaGithub } from 'react-icons/fa'; 
import { SiFlutter, SiMysql, SiCplusplus, SiDart } from 'react-icons/si'; 

function Skills() {
  const skills = [
    { icon: <FaJs size={80} color="#f7df1e" /> }, // JavaScript (Yellow)
    { icon: <FaReact size={80} color="#61dafb" /> }, // React (Light Blue)
   
    { icon: <FaPython size={80} color="#306998" /> }, // Python (Blue)
    { icon: <FaDatabase size={80} color="#4f5b62" /> }, // MongoDB (Gray)
    { icon: <SiMysql size={80} color="#00758f" /> }, // MySQL (Blue)
    { icon: <FaJava size={80} color="#f8981d" /> }, // Java (Orange)
    { icon: <FaDocker size={80} color="#2496ed" /> }, // Docker (Blue)
    { icon: <SiFlutter size={80} color="#02569b" /> }, // Flutter (Blue)
    { icon: <SiDart size={80} color="#00B4B6" /> }, // Dart (Turquoise)
    { icon: <SiCplusplus size={80} color="#00599c" /> }, // C++ (Blue)
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
      

      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
               // You can update this to match the skill's name
              icon={skill.icon}
              
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
