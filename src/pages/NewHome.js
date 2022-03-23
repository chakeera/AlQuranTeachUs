import { Card, CardMedia, Grid } from '@mui/material';
import { CalendarComponent, Inject, Islamic } from '@syncfusion/ej2-react-calendars';
import '../style/calendar.css';
import header from '../assets/images/header.png';
import background from '../assets/images/newlayout/background.png';
import layout from '../assets/images/newlayout/layout_bg.png';
import bismillah from '../assets/images/newlayout/bismillah.png';
import logo from '../assets/images/logo.png';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import theme from '../core/theme';

const styles = {
  boxBackground: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minWidth: '100vw',
    minHeight: '100vh',
    width: '100%',
    height: '100%',
    backgroundAttachment: 'fixed',
    textAlign: 'center'
  },
  boxContainer: {
    backgroundImage: `url(${layout})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 120vh',
    backgroundPosition: 'center',
    minWidth: '100vw',
    minHeight: '100vh',
    width: '100%',
    height: '100%',
    backgroundAttachment: 'fixed'
  },
  boxBismillah: {
    width: 400,
    height: 140
  },
  boxLogo: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: 70,
    top: 50
  },
  boxTitle: {
    position: 'absolute',
    right: 230,
    top: 90
  }
};

const newHome = () => {
  return (
    <>
      <Box style={styles.boxBackground}>
        <Box style={styles.boxContainer}>
          <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
            <Toolbar style={{ justifyContent: 'center' }}>
              <img src={bismillah} style={styles.boxBismillah} />
            </Toolbar>
          </AppBar>
          <img src={logo} style={styles.boxLogo} />
          <Box style={styles.boxTitle}>
            <Typography variant="h5" color={theme.palette.primary.main}>
              อัล-กุรอานสอนเรา
            </Typography>
            <Typography variant="h5" color={theme.palette.primary.main}>
              Al-Quran Teaches Us
            </Typography>
          </Box>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
            <Grid item>
              <Card sx={{ mx: 1, my: 1, maxWidth: 350 }}>
                <CardMedia component="img" image={header} alt="header" />
              </Card>
            </Grid>
            <Grid item>
              <Box sx={{ my: 1 }}>
                <CalendarComponent id="calendar" calendarMode="Islamic">
                  <Inject services={[Islamic]} />
                </CalendarComponent>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <CalendarComponent id="calendar"></CalendarComponent>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default newHome;
