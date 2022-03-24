import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';
import bismillah from '../../assets/images/bismillah.png';

const appBar = () => {
  return (
    <>
      <AppBar position="static" style={{ background: 'transparent' }}>
        <Toolbar>
          <Box sx={{ my: 1, height: { xs: 50, sm: 100, md: 120 } }} component="img" src={logo} />
          <Typography
            sx={{
              textAlign: 'center',
              color: 'white',
              ml: 2,
              fontSize: {
                md: 30,
                sm: 25,
                xs: 15
              }
            }}>
            อัลกุรอานสอนเรา
          </Typography>
          <Box
            sx={{ margin: 'auto', my: 1, height: { xs: 40, sm: 100, md: 120 } }}
            component="img"
            src={bismillah}
          />
          <Typography
            sx={{
              textAlign: 'center',
              color: 'white',
              display: { xs: 'none', md: 'flex' },
              mr: { md: 'auto' },
              fontSize: {
                md: 25,
                sm: 25,
                xs: 15
              }
            }}>
            Al-Quran Teaches Us
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default appBar;
