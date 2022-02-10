import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import React from 'react';
import theme from '../core/theme';
import Logo from '../assets/images/logo.svg';
import Slideshow from '../components/BannerSlide';
import TopBox from '../components/TopThreeBox';

const Home = () => (
  <>
    <AppBar position="static" fixed style={{ background: theme.palette.primary.main }}>
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
    <TopBox></TopBox>
  </>
);

export default Home;
