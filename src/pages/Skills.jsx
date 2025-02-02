import React from "react";
import { Container, Typography, Grid, Box, Chip, List, ListItem, ListItemText } from "@mui/material";
import { FaJs, FaReact, FaPython, FaDatabase, FaJava, FaDocker } from "react-icons/fa";
import { SiFlutter, SiMysql, SiCplusplus, SiDart } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaJs size={80} color="#f7df1e" /> },
    { icon: <FaReact size={80} color="#61dafb" /> },
    { icon: <FaPython size={80} color="#306998" /> },
    { icon: <FaDatabase size={80} color="#4f5b62" /> },
    { icon: <SiMysql size={80} color="#00758f" /> },
    { icon: <FaJava size={80} color="#f8981d" /> },
    { icon: <FaDocker size={80} color="#2496ed" /> },
    { icon: <SiFlutter size={80} color="#02569b" /> },
    { icon: <SiDart size={80} color="#00B4B6" /> },
    { icon: <SiCplusplus size={80} color="#00599c" /> },
  ];
  const certifications = [
    { title: "Supervised Machine Learning: Regression and Classification", link: "https://drive.google.com/file/d/1PMuyRzNSgmcx11InjNGopiD4MBweNoRE/view?usp=drive_link", institute: "DeepLearning.AI, Coursera" },
    { title: " Introduction to Back-End Development", link: "https://drive.google.com/file/d/11L1om9B2lXip9aGiECEiGo6ntReCe5Va/view?usp=drive_link", institute: "Coursera" },
    { title: " Introduction to Front-End Development", link: "https://drive.google.com/file/d/1Q9CvT3hgFlcDbDE7_GSkfNH9wqxKPC5F/view?usp=drive_link", institute: "Coursera" },
    {title: "Front- End Web Devolopment", link: "https://drive.google.com/file/d/1uzZNsM5BUa7OE5rp3y-yoP7kwMdAm9zl/view?usp=drive_link", institute: "University of Moratuwa" },
    {title: "Web Design for Beginners", link: "https://drive.google.com/file/d/1YsAJXPsenH6vt2oNX1ef9jTMWFoqALf7/view?usp=drive_link", institute: "University of Moratuwa" },
    {title: "HackerRank Certificate CSS(Basic)", link: "https://drive.google.com/file/d/1lzgWNJaxPMspL8U6LWDDMNf5Q7FGj-oH/view?usp=drive_link", institute: "HackerRank" },
    {title: "Python for Beginners", link: "https://drive.google.com/file/d/1g7H0GJ9f1kBjx7iBC20_0pENWOSpH2RF/view?usp=drive_link", institute: "University of Moratuwa" },
    {title: "Programming for Everybody (Getting Started with Python)", link: "https://drive.google.com/file/d/1iy-GH15vtlunGHwJADUEcaJZDtU-nGj1/view?usp=drive_link", institute: "University of Michigan | Coursera" },
    
  ];
  
  

  const competitions = [
    { title: "Hackathon Winner", description: "Participated and won the first prize at a university-level hackathon." },
    { title: "Code Challenge Finalist", description: "Secured a spot in the finals of a national-level coding competition." },
  ];

  const clubMembers = [
    { title: "Club President", description: "Led the university’s software development club and organized workshops." },
    { title: "Event Coordinator", description: "Organized coding workshops and hackathons within the club." },
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
              label={<div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }} />}
              sx={{
                padding: "15px 20px",
                height: "auto",
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Competitions, Clubs, Certifications Section */}
      <Box sx={{ marginTop: "40px" }}>
        {/* Three sections in one row */}
        <Grid container spacing={3} justifyContent="center">
          {/* Certifications */}
          <Grid item xs={12} sm={4}>
  <Box
    sx={{
      border: "1px solid #fff",
      padding: "20px",
      borderRadius: "8px",
      background: "rgba(0, 0, 0, 0.6)",
      color: "#fff",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    }}
  >
    {/* Centered Title */}
    <Typography 
      variant="h6" 
      sx={{ 
        fontWeight: "bold", 
        textAlign: "center",  // Centering the title
        marginBottom: "10px"
      }}
    >
      Certifications
    </Typography>

    {/* Bullet Points */}
    <Box sx={{ textAlign: "center" }}>  {/* Left-aligning the bullet points */}
      {certifications.map((activity, index) => (
        <Box key={index} sx={{ marginBottom: "15px" }}>
          <Typography variant="body2">
            <a
              href={activity.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
            >
              {activity.title}
            </a>
            {" "}by
            <a
              href={activity.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#61dafb", textDecoration: "none", fontWeight: "bold" }}
            >
              {" "} {activity.institute}
            </a>
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
</Grid>



          {/* Competitions */}
          <Grid item xs={12} sm={4}>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Competitions
              </Typography>
              <List>
                {competitions.map((activity, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={activity.title}
                      secondary={activity.description}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          {/* Clubs */}
          <Grid item xs={12} sm={4}>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Clubs & Extracurriculars
              </Typography>
              <List>
                {clubMembers.map((activity, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={activity.title}
                      secondary={activity.description}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Skills;
