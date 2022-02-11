import { Typography, Box, Card, CardMedia, CardContent, Stack } from '@mui/material';
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
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 12 }}>
          {' '}
          {/* Card with Image */}
          <Card sx={{ ml: 2, mb: 2, mt: 2, maxWidth: 400 }}>
            <CardMedia component="img" alt="topbox1" height="140" image={SampleImage} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                เนื้อหาcontentของtopicนี้ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัดนี้
                ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัดนี้ ใส่ได้ไม่เกิน5บรรทัด
                ใส่ได้ไม่เกิน5บรรทัดกินกี่
              </Typography>
            </CardContent>
          </Card>
          {/* Card without Image */}
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
          {/* Card with Makkah Live */}
          <Card sx={{ mb: 2, mt: 2, maxWidth: 400 }}>
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/OPPPrM179F4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </Card>
        </Stack>
      </Box>
    </div>
  );
};

export default TopBox;
