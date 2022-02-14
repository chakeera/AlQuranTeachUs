import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import React from 'react';
import theme from '../core/theme';
import Logo from '../assets/images/logo.png';
import Slideshow from '../components/BannerSlide';
import TopBox from '../components/TopThreeBox';
import CategoriesBox from '../components/CategoriesBox';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <AppBar position="static" style={{ background: theme.palette.primary.dark }}>
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
    <CategoriesBox></CategoriesBox>
    <Footer></Footer>
  </>
);

export default Home;
