import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import background from '../assets/images/background.png';
import Appbar from '../components/SharedComponents/Appbar';
import Footer from '../components/SharedComponents/Footer';
import theme from '../core/theme';
import Jummah from '../assets/images/jummah1.jpg';
import Jummah2 from '../assets/images/jummah2.jpg';
import Jummah3 from '../assets/images/jummah3.png';
import Jummah4 from '../assets/images/jummah4.jpg';
import './khutbah.css';

const khutbah = () => {
  return (
    <>
      <Box style={styles.container}>
        <Box sx={{ flexDirection: 'column' }}>
          <Appbar />
          <Box className="khutbah-container">
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
              คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน
            </Typography>
            <Box className="khutbah-grid-container">
              <Box className="khutbah-item">
                <Link to="/Khutbah/Hanafee">
                  <img className="img" src={Jummah} />
                </Link>
                <Typography>โดย อ.ฮานาฟี อามีน</Typography>
              </Box>
              <Box className="khutbah-item">
                <Link to="/Khutbah/Ashabulyameen">
                  <img className="img" src={Jummah2} />
                </Link>
                <Typography>โดย อ.อัสฮาบุ้ลยามีน ปานนพภา</Typography>
              </Box>
              <Box className="khutbah-item">
                <Link to="/Khutbah/Khalid">
                  <img className="img" src={Jummah3} />
                </Link>
                <Typography>โดย อ.คอลิด อารีบี</Typography>
              </Box>
              <Box className="khutbah-item">
                <Link to="/Khutbah/Other">
                  <img className="img" src={Jummah4} />
                </Link>
                <Typography>คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน อื่นๆ</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
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
