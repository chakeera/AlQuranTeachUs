import { Box, Button, Typography } from '@mui/material';
import Tafseer2 from '../../../assets/images/tafseer2.jpg';
import Tafseer3 from '../../../assets/images/tafseer3.jpg';
import Hadith from '../../../assets/images/hadith.png';
import Other from '../../../assets/images/hanafeeother.jpg';
import '../../../pages/pages.css';
import Appbar from '../../SharedComponents/Appbar';
import Footer from '../../SharedComponents/Footer';
import { ArrowBack } from '@mui/icons-material';
import theme from '../../../core/theme';
import { Link, useParams } from 'react-router-dom';

const selectCategory = () => {
  const { scholar } = useParams();
  return (
    <>
      {scholar === 'hanafee' ? (
        <Box className="grid-outer-container">
          <Appbar />
          <Box className="main-container">
            <Button
              href="/TafseerTalk"
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
              <ArrowBack></ArrowBack>กลับ
            </Button>
            <Box className="select-category-grid-container">
              <Box className="tafseer-item">
                <Link to="/Tafseer/Hanafee">
                  <img className="img" src={Tafseer2} />
                </Link>
                <Typography>ตัฟซีรอัลกุรอาน โดย อ.ฮานาฟี อามีน</Typography>
              </Box>
              <Box className="tafseer-item">
                <Link to="/Talk/Hanafee">
                  <img className="img" src={Other} />
                </Link>
                <Typography>บรรยายอื่นๆ โดย อ.ฮานาฟี อามีน</Typography>
              </Box>
            </Box>
          </Box>
          <Footer />
        </Box>
      ) : (
        <Box className="grid-outer-container">
          <Appbar />
          <Box className="main-container">
            <Button
              href="/TafseerTalk"
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
              <ArrowBack></ArrowBack>กลับ
            </Button>
            <Box className="select-category-grid-container">
              <Box className="tafseer-item">
                <Link to="/Tafseer/Ashabulyameen">
                  <img className="img" src={Tafseer3} />
                </Link>
                <Typography>ตัฟซีรอัลกุรอาน โดย อ.อัสฮาบุ้ลยามีน ปานนพภา</Typography>
              </Box>
              <Box className="tafseer-item">
                <Link to="/Talk/Ashabulyameen">
                  <img className="img" src={Hadith} />
                </Link>
                <Typography>ฮะดีษ สอนใจ โดย อ.อัสฮาบุ้ลยามีน ปานนพภา</Typography>
              </Box>
            </Box>
          </Box>
          <Footer />
        </Box>
      )}
    </>
  );
};

export default selectCategory;
