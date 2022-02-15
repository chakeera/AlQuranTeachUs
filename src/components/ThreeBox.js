import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import theme from '../core/theme';
import SampleImage from '../assets/images/banner.jpg';

const TopBox = () => {
  return (
    <div>
      <Typography
        variant="h6"
        component="div"
        sx={{ fontWeight: 'bold', my: 2, mx: 2, display: { xs: 'flex', md: 'flex' } }}>
        {' '}
        ข้อเตือนใจจากอัลกุรอาน
      </Typography>
      <Box
        sx={{
          maxWidth: '100%',
          background: theme.palette.primary.main,
          display: { xs: 'flex', md: 'flex' }
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <Card sx={{ mx: 2, my: 2, maxWidth: 400 }}>
              <CardMedia component="img" alt="topbox1" image={SampleImage} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  เนื้อหาcontentของtopicนี้ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัดนี้
                  ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัด
                  ใส่ได้ไม่เกิน5บรรทัดกินกี่
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ mx: 2, my: 2, maxWidth: 400, maxHeight: 270 }}>
              <iframe
                width="400"
                height="270"
                src="https://www.youtube.com/embed/OPPPrM179F4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ mx: 2, my: 2, maxWidth: 400, maxHeight: 270 }}>
              <iframe
                width="400"
                height="270"
                src="https://www.youtube.com/embed/OPPPrM179F4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TopBox;
