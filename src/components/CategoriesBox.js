import { Stack, Divider, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import React from 'react';
import QuranPhoto from '../assets/images/quran.jpg';
import TafseerPhoto from '../assets/images/tafseer.jpg';
import DuaPhoto from '../assets/images/dua.jpeg';
import KhutbahPhoto from '../assets/images/khutbah.jpg';
import TalkPhoto from '../assets/images/talk.png';

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
              <CardMedia component="img" width="100" image={QuranPhoto} alt="Quran" />
            </Card>
            <Typography align="center">กุรอาน</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" width="100" image={TafseerPhoto} alt="Tafseer" />
            </Card>
            <Typography align="center">ตัฟซีร</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" width="100" image={KhutbahPhoto} alt="Khutbah" />
            </Card>
            <Typography align="center">คุตบะหวันศุกร์</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" width="100" image={TalkPhoto} alt="บรรยาย" />
            </Card>
            <Typography align="center">บรรยาย</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" width="100" image={DuaPhoto} alt="Dua" />
            </Card>
            <Typography align="center">ดุอาจากกุรอาน</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{ mb: 1, mt: 2 }}>
              <CardMedia component="img" width="100" alt="Download" />
            </Card>
            <Typography align="center">คุตบะหวันศุกร์</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ mb: 2, mt: 2, maxWidth: 400 }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                8 sentence เนื้อหาcontentของtopicนี้ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัดนี้
                ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัด
                ใส่ได้ไม่เกิน5บรรทัดกินกี่ เนื้อหาcontentของtopicนี้ใส่ได้ไม่เกิน5บรรทัดนี้
                ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัดนี้
                ใส่ได้ไม่เกิน5บรรทัด ใส่ได้ไม่เกิน5บรรทัดกินกี่
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Stack>
    </div>
  );
};

export default CategoriesBox;
