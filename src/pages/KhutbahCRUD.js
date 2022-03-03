import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddData from '../components/AddDataTest';
import Appbar from '../components/Appbar';
import theme from '../core/theme';
import ShowData from '../components/ShowData';

const khutbahCRUD = () => {
  // const [Ajarn, setAjarn] = useState('Hanafee');
  // const [FolderName, setFolderName] = useState('');
  const [tabIndex, setTabIndex] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setTabIndex(newValue);
  // };

  return (
    <>
      <Appbar></Appbar>
      <Container>
        <Typography sx={{ my: 2, fontWeight: 'bold' }} variant="h6" textAlign="center">
          หมวดคุตบะห์วันศุกร์ตัฟซีรอัลกุรอาน
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabIndex} onChange={(value) => setTabIndex(value)} centered>
              <Tab
                label={
                  <span
                    style={{
                      color: theme.palette.primary.dark,
                      fontSize: 18,
                      width: 150,
                      fontWeight: 'bold'
                    }}>
                    ดูข้อมูล
                  </span>
                }
              />
              <Tab
                label={
                  <span
                    style={{
                      color: theme.palette.primary.dark,
                      fontSize: 18,
                      width: 150,
                      fontWeight: 'bold'
                    }}>
                    เพิ่มข้อมูล
                  </span>
                }
              />
            </Tabs>
          </Box>
        </Box>
        {tabIndex === 0 && <ShowData />}
        {tabIndex === 1 && <AddData typename="01surah" />}
      </Container>
    </>
  );
};

export default khutbahCRUD;
