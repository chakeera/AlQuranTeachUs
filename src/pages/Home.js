import React from 'react';
import BannerSlide from '../components/BannerSlide';
import TopContent from '../components/TopContent';
import CategoriesBox from '../components/CategoriesBox';
import Footer from '../components/Footer';
import Appbar from '../components/Appbar';
import { Container } from '@mui/material';
// import theme from '../core/theme';

const Home = () => (
  <>
    <Appbar></Appbar>
    <Container>
      <BannerSlide></BannerSlide>
      <TopContent></TopContent>
      <CategoriesBox></CategoriesBox>
    </Container>
    <Footer></Footer>
  </>
);

export default Home;
