import { Stack, Divider, Grid, Card, CardMedia, Typography, Button } from '@mui/material';
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
import header from '../assets/images/header.png';

const CategoriesBox = () => {
  return (
    <div>
      <Stack
        sx={{ ml: 2 }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 2, md: 2 }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={12} md={4}>
            <Button href="/Jummah">
              <Card sx={{ mb: 1, mt: 2 }}>
                <CardMedia component="img" image={FridayPhoto} alt="Friday" />
              </Card>
            </Button>
            <Typography align="center">คุตบะห์วันศุกร์ตัฟซีรอัลกุรอาน</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button href="/Jummah">
              <Card sx={{ mb: 1, mt: 2 }}>
                <CardMedia component="img" image={TafseerPhoto} alt="Tafseer" />
              </Card>
            </Button>
            <Typography align="center">บรรยาย ตัฟซีรอัลกุรอาน</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button href="/Jummah">
              <Card sx={{ mb: 1, mt: 2 }}>
                <CardMedia component="img" image={FacebookPhoto} alt="Khutbah" />
              </Card>
            </Button>
            <Typography align="center">Facebook ตัฟซีรอัลกุรอาน</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button href="/Jummah">
              <Card sx={{ mb: 1, mt: 2 }}>
                <CardMedia component="img" image={YoutubePhoto} alt="บรรยาย" />
              </Card>
            </Button>
            <Typography align="center">YouTube ตัฟซีรอัลกุรอาน</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button href="/Jummah">
              <Card sx={{ mb: 1, mt: 2 }}>
                <CardMedia component="img" image={QuranPhoto} alt="Dua" />
              </Card>
            </Button>
            <Typography align="center">หนังสืออัลกุรอาน & MP3 อัลกุรอานเพราะๆ</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button href="/Jummah">
              <Card sx={{ mb: 1, mt: 2 }}>
                <CardMedia component="img" image={OtherPhoto} alt="Download" />
              </Card>
            </Button>
            <Typography align="center">หลักฐานอื่นๆ</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
            <Grid item>
              <Card sx={{ mx: 1, my: 1, maxWidth: 350 }}>
                <CardMedia component="img" image={header} alt="header" />
              </Card>
            </Grid>
            <Grid item>
              <Box sx={{ my: 1 }}>
                <CalendarComponent id="calendar" calendarMode="Islamic">
                  <Inject services={[Islamic]} />
                </CalendarComponent>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <CalendarComponent id="calendar"></CalendarComponent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default CategoriesBox;
