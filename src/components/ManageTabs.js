import { AppBar, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import theme from '../core/theme';
import AddData from '../components/AddData';

const ManageTabs = (props) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <>
      <Typography sx={{ my: 2, fontWeight: 'bold' }} variant="h6" textAlign="center">
        {props.title}
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
      {tabIndex === 1 && <AddData key={props.value} typename={props.value} />}
      {/* {tabIndex === 0 && <ShowData />} */}
    </>
  );
};
export default ManageTabs;
