import { AppBar, Container, Toolbar, Typography, Box, Card } from '@mui/material';
import React from 'react';
import theme from '../core/theme';
import Logo from '../assets/images/logo.svg';
import Slideshow from '../components/BannerSlide';

const Home = () => (
  <>
    <AppBar style={{ background: theme.palette.primary.main }}>
      <Container>
        <Toolbar>
          <Box
            sx={{
              height: 64
            }}
            component="img"
            alt="Logo"
            src={Logo}
          />
          <Typography
            color="white"
            variant="h5"
            component="div"
            sx={{ display: { xs: 'flex', md: 'flex' } }}>
            อัลกุรอ่านสอนเรา อัลมุวาฮิด
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    <Slideshow></Slideshow>
    <Container>
      <Typography
        variant="h6"
        component="div"
        sx={{ fontWeight: 'bold', mt: 2, display: { xs: 'flex', md: 'flex' } }}>
        {' '}
        ข้อเตือนใจจากอัลกุรอาน
      </Typography>
      <Box color={theme.palette.primary.dark}>
        <Card></Card>
      </Box>
    </Container>
  </>
);

export default Home;
