import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import theme from '../core/theme';
import SampleImage from '../assets/images/banner.jpg';
import '../style/iframe.css';

const TopBox = () => {
  return (
    <div>
      <Box
        sx={{
          mb: 2,
          maxWidth: '100%',
          background: theme.palette.primary.main,
          display: { xs: 'flex', md: 'flex' }
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Typography
              variant="h6"
              justifyContent="center"
              sx={{ fontWeight: 'bold', my: 2, mx: 2, display: { xs: 'flex', md: 'flex' } }}>
              {' '}
              ข้อเตือนใจจากอัลกุรอาน
            </Typography>
            <Card sx={{ mx: 2, my: 2, maxWidth: 350, height: { md: 270 }, maxHeight: { xs: 270 } }}>
              <CardMedia component="img" alt="topbox1" image={SampleImage} />
              <CardContent sx={{ display: 'flex' }}>
                <Typography variant="h6">
                  เนื้อหาcontentของtopicนี้ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัดนี้
                  ใส่ได้ไม่เกิน5บรรทัดนี้ใส่ได้ไม่เกิน5บรรทัดนี้ใส่ได้ไม่เกิน5บรรทัดใส่
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              justifyContent="center"
              sx={{ fontWeight: 'bold', my: 2, mx: 2, display: { xs: 'flex', md: 'flex' } }}>
              {' '}
              ไลฟ์สดคุตบะห์และบรรยาย
            </Typography>
            <Card sx={{ my: 2, mx: 2, maxWidth: 350, maxHeight: 270 }}>
              <iframe
                width="350"
                height="270"
                src="https://www.facebook.com/plugins/video.php?height=297&href=https%3A%2F%2Fwww.facebook.com%2Farleemsr%2Fvideos%2F1341159953062424%2F&show_text=false&width=560&t=0"
                // src="https://www.facebook.com/100005431126482/videos/1341159953062424/"
                // src="https://www.facebook.com/plugins/video.php?height=270&href=https%3A%2F%2Fwww.facebook.com%2Farleemsr%2Fvideos%2F1341159953062424%2F&show_text=false&width=350&t=0"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen={true}></iframe>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              justifyContent="center"
              sx={{ fontWeight: 'bold', my: 2, mx: 2, display: { xs: 'flex', md: 'flex' } }}>
              {' '}
              ไลฟ์สด Makkah, Saudi Arabia
            </Typography>
            <Card sx={{ my: 2, mx: 2, maxWidth: 350, maxHeight: 270 }}>
              <iframe
                width="350"
                height="270"
                src="https://www.youtube.com/embed/OPPPrM179F4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}></iframe>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TopBox;
