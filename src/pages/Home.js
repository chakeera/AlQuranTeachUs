import React from 'react';
import Slideshow from '../components/CarouselBanner';
import TopBox from '../components/ThreeBox';
import CategoriesBox from '../components/CategoriesBox';
import Footer from '../components/Footer';
import Appbar from '../components/Appbar';

const Home = () => (
  <>
    <Appbar></Appbar>
    <Slideshow></Slideshow>
    <TopBox></TopBox>
    <CategoriesBox></CategoriesBox>
    <Footer></Footer>
  </>
);

export default Home;
