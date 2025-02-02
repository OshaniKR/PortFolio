import React from 'react';
import { Container, Typography, Link, Box, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Footer() {
  return (
    <Container
      maxWidth={false}
      sx={{
        textAlign: 'center',
        padding: '20px 0',
        backgroundColor: '#1d1b2e',
        color: '#fff',
      }}
    >
      {/* Main Content Section: Social, Education, About in one row */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', gap: '20px' }}>
        
        {/* Social Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Social
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link
              href="https://github.com/OshaniKR"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#fff', display: 'flex', alignItems: 'center',justifyContent: 'center', gap: '5px' }}
            >
              <GitHubIcon /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/oshani-ranathunga"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#fff', display: 'flex', alignItems: 'center',justifyContent: 'center', gap: '5px' }}
            >
              <LinkedInIcon /> LinkedIn
            </Link>
                      </Box>
        </Box>

        {/* Education Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Education
          </Typography>
          <Typography variant="body2">
            B.Sc. Computer Engineering Undergraduate, University of Ruhuna, Faculty of Engineering (2022–present)
          </Typography>
          <Typography variant="body2">
            Matara Central College (2007–2020)
          </Typography>
        </Box>

        {/* About Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            About
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            <EmailIcon /> kawshalyaoshani5@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            <PhoneIcon /> +94 74 156 7467
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: '#fff', marginTop: '20px', marginBottom: '20px' }} />

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ fontSize: '14px' }}>
          © 2025 Developed by Oshani Ranathunga Inc. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
