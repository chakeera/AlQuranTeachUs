import React from 'react';
import { AppBar, Container, Toolbar, Stack, Typography, Button, Grid } from '@mui/material';
import theme from '../core/theme';
import { Box } from '@mui/system';

const Footer = () => (
  <AppBar
    position="static"
    style={{ background: theme.palette.primary.dark }}
    sx={{ mt: 4, top: 'auto', bottom: 0 }}>
    <Container>
      <Toolbar>
        <Stack
          sx={{ mt: 2, mb: 3 }}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 50 }}>
          <Box>
            <Typography color="white" variant="h6">
              อัลกุรอ่านสอนเรา อัลมุวาฮิด Al Quran Teaches Us
            </Typography>
          </Box>
          <Box>
            <Grid
              container
              columnSpacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center">
              <Grid item>
                <Typography color="white" variant="h6">
                  สำหรับแอดมิน
                </Typography>
              </Grid>
              <Grid item>
                <Button href="/manage" variant="contained">
                  ADMIN
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Footer;
