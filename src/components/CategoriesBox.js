import { Stack, Divider, Grid, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { CalendarComponent, Inject, Islamic } from '@syncfusion/ej2-react-calendars';
import '../style/calendar.css';
import QuranPhoto from '../assets/images/quran.jpg';
import TafseerPhoto from '../assets/images/tafseer.jpg';
import FridayPhoto from '../assets/images/friday.jpg';
import FacebookPhoto from '../assets/images/facebook.jpeg';
import YoutubePhoto from '../assets/images/youtube.jpg';
import OtherPhoto from '../assets/images/other.png';
import { Box } from '@mui/system';

const CategoriesBox = () => {
  return (
    <div>
      <Stack
        sx={{ ml: 2 }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 2, md: 3 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" image={FridayPhoto} alt="Friday" />
            </Card>
            <Typography align="center">คุตบะห์วันศุกร์ตัฟซีรอัลกุรอาน</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" image={TafseerPhoto} alt="Tafseer" />
            </Card>
            <Typography align="center">บรรยาย ตัฟซีรอัลกุรอาน</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" image={FacebookPhoto} alt="Khutbah" />
            </Card>
            <Typography align="center">Facebook ตัฟซีรอัลกุรอาน</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" image={YoutubePhoto} alt="บรรยาย" />
            </Card>
            <Typography align="center">YouTube ตัฟซีรอัลกุรอาน</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" image={QuranPhoto} alt="Dua" />
            </Card>
            <Typography align="center">หนังสืออัลกุรอาน & MP3 อัลกุรอานเพราะๆ</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" image={OtherPhoto} alt="Download" />
            </Card>
            <Typography align="center">หลักฐานอื่นๆ</Typography>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ my: 2 }}>
            <CalendarComponent id="calendar" calendarMode="Islamic">
              <Inject services={[Islamic]} />
            </CalendarComponent>
          </Box>
          <CalendarComponent id="calendar"></CalendarComponent>
        </Grid>
      </Stack>
    </div>
  );
};

export default CategoriesBox;
