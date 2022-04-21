import { Box } from '@mui/material';
import React from 'react';
import Appbar from '../components/SharedComponents/Appbar';
import Content from '../components/ClientSide/LandingPageComponents/Content';
import Footer from '../components/SharedComponents/Footer';
import './pages.css';

const Home = () => (
  <>
    <Box className="grid-outer-container">
      <Box sx={{ flexDirection: 'column' }}>
        <Appbar></Appbar>
        <Content></Content>
        <Footer></Footer>
      </Box>
    </Box>
  </>
);

export default Home;
