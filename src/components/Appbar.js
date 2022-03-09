import { AppBar, Typography, Box, Avatar, Container, Toolbar } from '@mui/material';
import React from 'react';
import Bismillah from '../assets/images/bismillah.png';
import Logo from '../assets/images/logo.png';
import theme from '../core/theme';

const Appbar = () => {
  return (
    <div>
      <AppBar position="static" style={{ background: theme.palette.primary.dark }}>
        <Container>
          <Toolbar>
            <Avatar
              sx={{
                my: 0.5,
                mr: { xs: 2, md: 6 },
                width: { xs: 80, md: 110 },
                height: { xs: 80, md: 110 }
              }}
              src={Logo}></Avatar>
            <Typography
              sx={{ mr: { md: 40 }, fontSize: { xs: 18, md: 28 } }}
              color="white"
              variant="h5">
              อัลกุรอานสอนเรา อัลมุวาฮิด
            </Typography>
            <Box
              sx={{
                height: 70,
                display: { xs: 'none', md: 'flex' }
              }}
              component="img"
              alt="Bismillah"
              src={Bismillah}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Appbar;
