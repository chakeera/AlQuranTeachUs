import { Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Appbar from '../components/Appbar';

const Admin = () => {
  var header = [
    { title: 'แก้ไข Banner', link: '/' },
    { title: 'แก้ไข ข้อเตือนใจจากอัลกุรอาน', link: '/' },
    { title: 'แก้ไข link khutbah', link: '/' },
    { title: 'แก้ไข เนื้อหาใน6 ประเภท', link: '/category' }
  ];
  return (
    <>
      <Appbar></Appbar>
      <Container>
        <Typography sx={{ my: 2, fontWeight: 'bold' }} variant="h6" textAlign="center">
          เพิ่มหรือแก้ไขข้อมูลหน้าเว็บ
        </Typography>
        <Stack direction="row">
          {header.map((value, index) => {
            return (
              <Button key={index} href={value.link}>
                <Card key={index}>
                  <CardContent>
                    <Typography>{value.title}</Typography>
                  </CardContent>
                </Card>
              </Button>
            );
          })}
        </Stack>
      </Container>
    </>
  );
};

export default Admin;
