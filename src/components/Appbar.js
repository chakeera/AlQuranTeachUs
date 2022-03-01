import { AppBar, Typography, Box, Stack, Button } from '@mui/material';
import React from 'react';
import Bismillah from '../assets/images/bismillah.png';
import Logo from '../assets/images/logo.png';
import theme from '../core/theme';

const Appbar = () => {
  return (
    <div>
      <AppBar position="static" style={{ background: theme.palette.primary.dark }}>
        {/* <Toolbar> */}
        <Stack
          direction="row"
          spacing={{ xs: 2, md: 15 }}
          justifyContent="space-around"
          alignItems="center">
          <Button href="/">
            <Box
              sx={{
                height: 64
              }}
              component="img"
              alt="Logo"
              src={Logo}
            />
          </Button>
          <Typography sx={{ fontSize: 30 }} color="white" variant="h5">
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
        </Stack>
        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
};

export default Appbar;
