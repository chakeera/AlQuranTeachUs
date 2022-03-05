import { AppBar, Typography, Box, Stack, Button, Avatar, Container } from '@mui/material';
import React from 'react';
import Bismillah from '../assets/images/bismillah.png';
import Logo from '../assets/images/logo.png';
import theme from '../core/theme';

const Appbar = () => {
  return (
    <div>
      <AppBar position="static" style={{ background: theme.palette.primary.dark }}>
        <Container>
          <Stack direction="row" spacing={{ xs: 2, md: 15 }} alignItems="center">
            <Button sx={{ borderRadius: 50 }} href="/">
              <Avatar sx={{ width: 100, height: 100 }} src={Logo}></Avatar>
            </Button>
            <Typography sx={{ fontSize: 30 }} color="white" variant="h5">
              อัลกุรอานสอนเรา อัลมุวาฮิด
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
          </Stack>
        </Container>
      </AppBar>
    </div>
  );
};

export default Appbar;
