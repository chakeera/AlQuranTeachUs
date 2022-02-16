import React from 'react';
import Slideshow from '../components/CarouselBanner';
import TopBox from '../components/ThreeBox';
import CategoriesBox from '../components/CategoriesBox';
import Footer from '../components/Footer';
import Appbar from '../components/Appbar';
// import { Container } from '@mui/material';
// import theme from '../core/theme';

const Home = () => (
  <>
    <Appbar></Appbar>
    {/* <Container> */}
    <Slideshow></Slideshow>
    <TopBox></TopBox>
    <CategoriesBox></CategoriesBox>
    {/* </Container> */}
    <Footer></Footer>
  </>
);

export default Home;
