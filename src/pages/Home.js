import React from 'react';
import BannerSlide from '../components/Home/BannerSlide';
import TopContent from '../components/Home/TopContent';
import CategoriesBox from '../components/Home/CategoriesBox';
import { Container } from '@mui/material';
import { Appbar, Footer } from '../components/Home/AppbarFooter';

const Home = () => (
  <>
    <Appbar />
    <Container>
      <BannerSlide></BannerSlide>
      <TopContent></TopContent>
      <CategoriesBox></CategoriesBox>
    </Container>
    <Footer />
  </>
);

export default Home;
