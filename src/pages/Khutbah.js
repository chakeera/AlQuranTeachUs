import { Button, Typography } from '@mui/material';
// import { Appbar } from '../components/OldHome/AppbarFooter';
import theme from '../core/theme';
import ArrowBack from '@mui/icons-material/ArrowBack';
import SelectScholarContent from '../components/ContentPage/SelectScholarContent';

const khutbah = () => {
  return (
    <>
      {/* <Appbar /> */}
      <Button
        href="/"
        sx={{
          mx: 2,
          mt: 2,
          color: theme.palette.primary.dark,
          fontWeight: 'bolder',
          fontSize: 18
        }}
        variant="text">
        <ArrowBack></ArrowBack>กลับหน้าหลัก
      </Button>
      <Typography
        sx={{
          textAlign: 'center',
          color: theme.palette.primary.dark,
          fontWeight: 'bolder',
          fontSize: 20
        }}>
        คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน
      </Typography>
      <SelectScholarContent category="Khutbah" />
    </>
  );
};
export default khutbah;
