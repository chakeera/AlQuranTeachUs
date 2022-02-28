import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import Appbar from '../components/Appbar';
import ArrowBack from '@mui/icons-material/ArrowBack';
import theme from '../core/theme';
import Jummah from '../assets/images/jummah1.jpg';

const Friday = () => {
  return (
    <div>
      <Appbar></Appbar>
      <Button
        href="/"
        sx={{ mx: 2, my: 2, color: theme.palette.primary.dark, fontWeight: 'bolder', fontSize: 18 }}
        Icon
        variant="text">
        {' '}
        <ArrowBack></ArrowBack>กลับหน้าหลัก
      </Button>
      <Typography
        sx={{
          my: 2,
          textAlign: 'center',
          color: theme.palette.primary.dark,
          fontWeight: 'bolder',
          fontSize: 24
        }}>
        คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Button href="/hanafee">
          <Card sx={{ width: 200 }}>
            <CardMedia component="img" image={Jummah} />
          </Card>
        </Button>
        <Typography>คุตบะห์วันศุกร์และตัฟซีรอัลกุรอาน โดย อ.ฮานาฟี อามีน</Typography>
        <Button href="/hanafee">
          <Card sx={{ width: 200 }}>
            <CardMedia component="img" image={Jummah} />
          </Card>
        </Button>
        <Typography>คุตบะห์วันศุกร์และตัฟซีรอัลกุรอาน โดย อ.อัสฮาบุ้ลยามีน ปานนพภา</Typography>
        {/* </Box>
      <Box sx={{ textAlign: 'center' }}> */}
        <Button href="/hanafee">
          <Card sx={{ width: 200 }}>
            <CardMedia component="img" image={Jummah} />
          </Card>
        </Button>
        <Typography>คุตบะห์วันศุกร์และตัฟซีรอัลกุรอาน โดย อ.คอลิด อารีบี</Typography>
        <Button href="/hanafee">
          <Card sx={{ width: 200 }}>
            <CardMedia component="img" image={Jummah} />
          </Card>
        </Button>
        <Typography>คุตบะห์วันศุกร์และตัฟซีรอัลกุรอานอื่นๆ</Typography>
      </Box>
    </div>
  );
};

export default Friday;
