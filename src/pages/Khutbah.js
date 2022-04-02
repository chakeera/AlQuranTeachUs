import { Box, Button, Toolbar, Typography } from '@mui/material';
import theme from '../core/theme';
import ArrowBack from '@mui/icons-material/ArrowBack';
import SelectScholarContent from '../components/ContentPage/SelectScholarContent';
// import { Box } from '@mui/system';
import background from '../assets/images/background.png';
import Appbar from '../components/Home/Appbar';
import Footer from '../components/Home/Footer';

const khutbah = () => {
  return (
    <>
      <Box style={styles.container}>
        <Box sx={{ flexDirection: 'column' }}>
          <Appbar />
          <Box sx={{ background: 'rgba(190, 212, 186,0.7)' }}>
            <Button
              href="/"
              sx={{
                mx: 2,
                mt: 2,
                color: theme.palette.primary.dark,
                fontWeight: 'bolder',
                fontSize: 18
              }}
              variant="text"
            >
              <ArrowBack></ArrowBack>กลับหน้าหลัก
            </Button>
            <Typography
              sx={{
                textAlign: 'center',
                color: theme.palette.primary.dark,
                fontWeight: 'bolder',
                fontSize: 20
              }}
            >
              คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน
            </Typography>
            <SelectScholarContent category="Khutbah" />
            <Toolbar />
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

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
export default khutbah;
