import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import theme from '../core/theme';
import AddData from '../components/AddData';

const khutbahManage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Typography sx={{ my: 2, fontWeight: 'bold' }} variant="h6" textAlign="center">
        คุตบะห์วันศุกร์ตัฟซีรอัลกุรอาน
      </Typography>
      <Box>
        <AppBar position="static">
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: theme.palette.primary.dark } }}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example">
            <Tab label="จัดการและแก้ไข" />
            <Tab label="เพิ่มเนื้อหา" />
          </Tabs>
        </AppBar>
      </Box>
      {tabIndex === 1 && <AddData typename="01surah" />}
      {/* {tabIndex === 0 && <ShowData />} */}
    </>
  );
};

export default khutbahManage;
