import { ArrowBack } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import background from '../assets/images/background.png';
import Appbar from '../components/SharedComponents/Appbar';
import Footer from '../components/SharedComponents/Footer';
import Youtube from '../assets/images/youtube.jpg';
import theme from '../core/theme';

const youtube = () => {
  return (
    <>
      <Box style={styles.container}>
        <Box sx={{ flexDirection: 'column' }}>
          <Appbar />
          <Box className="main-container">
            <Button
              href="/"
              sx={{
                mx: 2,
                mt: { xs: 2, md: 2 },
                mb: { xs: 2, md: 0 },
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
                fontSize: { xs: 18, md: 20 },
                mb: 2
              }}
            >
              Youtube ตัฟซีรอัลกุรอาน
            </Typography>

            <Box className="tafseer-grid-container">
              <Box className="tafseer-item">
                <Link to="/Youtube/Hanafee">
                  <img className="img" src={Youtube} />
                </Link>
                <Typography>โดย อ.ฮานาฟี อามีน</Typography>
              </Box>
              <Box className="tafseer-item">
                <Link to="/Youtube/Ashabulyameen">
                  <img className="img" src={Youtube} />
                </Link>
                <Typography>โดย อ.อัสฮาบุ้ลยามีน ปานนพภา</Typography>
              </Box>
              <Box className="tafseer-item">
                <Link to="/Youtube/Other">
                  <img className="img" src={Youtube} />
                </Link>
                <Typography>ตัฟซีรอัลกุรอานอื่นๆ</Typography>
              </Box>
            </Box>
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

export default youtube;
