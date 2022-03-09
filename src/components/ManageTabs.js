import { AppBar, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import theme from '../core/theme';
import ShowData1 from '../components/ShowData1';
import AddData from '../components/AddData';
import AddDataSNS from '../components/AddDataSNS';
import AddData1level from '../components/AddData1level';
// import { collection, getDocs } from 'firebase/firestore';
// import db from '../firebase';

const ManageTabs = (props) => {
  const [tabIndex, setTabIndex] = useState(0);

  // const getData = async (Scholar) => {
  //   const querySnapshot = await getDocs(collection(db, Scholar + props.typename));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, ' => ', doc.data());
  //   });
  // };

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
      {(props.value === 'Khutbah' || props.value === 'Tafseer') && tabIndex === 1 && (
        <AddData key={props.value} typename={props.value} />
      )}
      {(props.value === 'Youtube' || props.value === 'Facebook') && tabIndex === 1 && (
        <AddDataSNS key={props.value} typename={props.value} />
      )}
      {(props.value === 'Quran' || props.value === 'Evidence') && tabIndex === 1 && (
        <AddData1level key={props.value} typename={props.value} />
      )}

      {/* {tabIndex === 1 && <AddData key={props.value} typename={props.value} />} */}
      {tabIndex === 0 && <ShowData1 key={props.value} typename={props.value} />}
    </>
  );
};
export default ManageTabs;
