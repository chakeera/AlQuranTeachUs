import React from 'react';
import BannerSlide from '../components/BannerSlide';
import TopContent from '../components/TopContent';
import CategoriesBox from '../components/CategoriesBox';
import { Container } from '@mui/material';

const Home = () => (
  <>
    <Container>
      <BannerSlide></BannerSlide>
      <TopContent></TopContent>
      <CategoriesBox></CategoriesBox>
    </Container>
  </>
);

export default Home;
