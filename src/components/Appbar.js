import { AppBar, Container, Toolbar, Typography, Box, Stack } from '@mui/material';
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
            <Stack
              direction="row"
              spacing={{ xs: 2, md: 15 }}
              justifyContent="center"
              alignItems="center">
              <Box
                sx={{
                  height: 64
                }}
                component="img"
                alt="Logo"
                src={Logo}
              />
              <Typography sx={{ fontSize: 30 }} color="white" variant="h5" component="div">
                อัลกุรอ่านสอนเรา อัลมุวาฮิด
              </Typography>
              <Box
                sx={{
                  height: 100,
                  display: { xs: 'none', md: 'flex' }
                }}
                component="img"
                alt="Bismillah"
                src={Bismillah}
              />
              {/* <img height={100} src={Bismillah}></img> */}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Appbar;
