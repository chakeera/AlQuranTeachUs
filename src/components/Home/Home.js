import { Box } from '@mui/material';
import React from 'react';
import Appbar from './Appbar';
import Content from './Content';
import Footer from './Footer';
import background from '../../assets/images/background.png';

const Home = () => (
  <>
    <Box style={style.container}>
      <Box sx={{ flexDirection: 'column' }}>
        <Appbar></Appbar>
        <Content></Content>
        <Footer></Footer>
      </Box>
    </Box>
  </>
);

const style = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minWidth: '100vw',
    minHeight: '100vh',
    width: '100%',
    height: '100%',
    backgroundAttachment: 'fixed'
  }
};

export default Home;