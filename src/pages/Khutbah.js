import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { khutbahData } from '../components/Data/Data';
import Appbar from '../components/SharedComponents/Appbar';
import Footer from '../components/SharedComponents/Footer';
import theme from '../core/theme';
import './pages.css';

const khutbah = () => {
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
              คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน
            </Typography>
            <Box className="grid-container">
              {khutbahData.map((data) => (
                <Box key={data.name} className="khutbah-item">
                  <Link to={data.link}>
                    <img className="img" src={data.image} />
                  </Link>
                  <Typography sx={{ fontWeight: 'bold' }}>{data.name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};
export default khutbah;
