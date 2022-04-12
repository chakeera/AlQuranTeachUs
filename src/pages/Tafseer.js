import { ArrowBack } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Appbar from '../components/SharedComponents/Appbar';
import Footer from '../components/SharedComponents/Footer';
import Tafseer1 from '../assets/images/tafseer1.jpg';
import Tafseer2 from '../assets/images/tafseer2.jpg';
import Tafseer3 from '../assets/images/tafseer3.jpg';
import theme from '../core/theme';
import './pages.css';

const tafseer = () => {
  return (
    <>
      <Box className="outer-container">
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
              บรรยายและตัฟซีรอัลกุรอาน
            </Typography>

            <Box className="tafseer-grid-container">
              <Box className="tafseer-item">
                <Link to="/TafseerTalk/choose/hanafee">
                  <img className="img" src={Tafseer2} />
                </Link>
                <Typography>โดย อ.ฮานาฟี อามีน</Typography>
              </Box>
              <Box className="tafseer-item">
                <Link to="/TafseerTalk/choose/ashabulyameen">
                  <img className="img" src={Tafseer3} />
                </Link>
                <Typography>โดย อ.อัสฮาบุ้ลยามีน ปานนพภา</Typography>
              </Box>
              <Box className="tafseer-item">
                <Link to="/Tafseer/Other">
                  <img className="img" src={Tafseer1} />
                </Link>
                <Typography>บรรยายและตัฟซีรอัลกุรอานอื่นๆ</Typography>
              </Box>
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default tafseer;
