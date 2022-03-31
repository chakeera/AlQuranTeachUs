import { Box } from '@mui/material';
import React from 'react';
import Appbar from '../components/Home/Appbar';
// import Content from '../components/Home/Content';
import Content from '../components/Home/GridTest';
import Footer from '../components/Home/Footer';
import background from '../assets/images/background.png';

const Home = () => (
  <>
    <Box style={styles.container}>
      <Box sx={{ flexDirection: 'column' }}>
        {/* box flex direction column */}
        <Appbar></Appbar>
        <Content></Content>
        <Footer></Footer>
      </Box>
    </Box>
  </>
);

const styles = {
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
