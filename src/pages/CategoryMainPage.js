/* eslint-disable no-undef */
import { Box, Button, Card, CardMedia, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Appbar from '../components/Appbar';

const CategoryMainPage = () => {
  var data = [
    { title: 'คุตบะห์วันศุกร์ตัฟซีรอัลกุรอาน', link: '/', image: 'friday.jpg' },
    { title: 'บรรยาย ตัฟซีรอัลกุรอาน', link: '/', image: 'tafseer.jpg' },
    { title: 'Facebook ตัฟซีรอัลกุรอาน', link: '/', image: 'facebook.jpeg' },
    { title: 'YouTube ตัฟซีรอัลกุรอาน', link: '/', image: 'youtube.jpg' },
    { title: 'หนังสืออัลกุรอาน & MP3 อัลกุรอานเพราะๆ', link: '/', image: 'quran.jpg' },
    { title: 'หลักฐานอื่นๆ', link: '/', image: 'other.png' }
  ];
  return (
    <>
      <Appbar></Appbar>
      <Container>
        <Typography sx={{ my: 2, fontWeight: 'bold' }} variant="h6" textAlign="center">
          เพิ่มหรือแก้ไขข้อมูลหน้าเว็บ
        </Typography>
        <Stack direction="row" justifyContent="center">
          {data.map((value, index) => {
            return (
              <Box textAlign="center" key={index}>
                <Button href={value.link}>
                  <Card>
                    <CardMedia
                      sx={{ width: 150, height: 150 }}
                      component="img"
                      src={require(`../assets/images/${value.image}`)}
                    />
                  </Card>
                </Button>
                <Typography sx={{ mx: 2 }} align="center">
                  {value.title}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </>
  );
};

export default CategoryMainPage;
