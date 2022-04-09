// import { Button, Card, CardMedia, Container, Grid, Typography } from '@mui/material';
import Jummah from '../../assets/images/jummah1.jpg';
import Jummah2 from '../../assets/images/jummah2.jpg';
import Jummah3 from '../../assets/images/jummah3.png';
import Jummah4 from '../../assets/images/jummah4.jpg';
import './selectScholar.css';

import { Box, Button, Typography } from '@mui/material';
import theme from '../../core/theme';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const selectScholarContent = () => {
  return (
    <>
      <Box className="select-scholar-container">
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
        <Box className="select-scholar-grid-container">
          <Box className="select-scholar-item">
            <Link to="/Khutbah/Hanafee">
              <img className="img" src={Jummah} />
            </Link>
            <Typography>โดย อ.ฮานาฟี อามีน</Typography>
          </Box>
          <Box className="select-scholar-item">
            <Link to="/Khutbah/Ashabulyameen">
              <img className="img" src={Jummah2} />
            </Link>
            <Typography>โดย อ.อัสฮาบุ้ลยามีน ปานนพภา</Typography>
          </Box>
          <Box className="select-scholar-item">
            <Link to="/Khutbah/Khalid">
              <img className="img" src={Jummah3} />
            </Link>
            <Typography>โดย อ.คอลิด อารีบี</Typography>
          </Box>
          <Box className="select-scholar-item">
            <Link to="/Khutbah/Other">
              <img className="img" src={Jummah4} />
            </Link>
            <Typography>คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน อื่นๆ</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default selectScholarContent;
