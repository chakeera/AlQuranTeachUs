import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import theme from '../core/theme';
import Bismillah from '../assets/images/bismillah.png';
import Logo from '../assets/images/logo.png';

export const Appbar = () => {
  return (
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
  );
};

export const Footer = () => {
  return (
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
};
