import { AppBar, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import theme from '../../core/theme';
import SelectScholar from './SelectScholar';
import AddFolder from './AddFolder';
import AddSingleFile from './AddSingleFile';
import DisplaySingleFile from './DisplaySingleFile';
import AddImage from './AddImage';

const ManageTabs = (props) => {
  const [tabIndex, setTabIndex] = useState(1);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <>
      <Typography sx={{ my: 2, fontWeight: 'bold' }} variant="h6" textAlign="center">
        {props.title}
      </Typography>
      <Box>
        <AppBar elevation={0} position="static">
          {props.value === 'Images' ? (
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              TabIndicatorProps={{ style: { background: theme.palette.primary.dark } }}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="รูปภาพ 1" />
              <Tab label="รูปข่าวสาร" />
            </Tabs>
          ) : (
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              TabIndicatorProps={{ style: { background: theme.palette.primary.dark } }}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="จัดการและแก้ไข" />
              <Tab label="เพิ่มเนื้อหา" />
            </Tabs>
          )}
        </AppBar>
      </Box>
      {props.value === 'Images' && tabIndex === 0 && <AddImage photoType="customImage" />}
      {props.value === 'Images' && tabIndex === 1 && <AddImage photoType="topContent" />}

      {(props.value === 'Quran' || props.value === 'Evidence') && tabIndex === 1 && (
        <AddSingleFile key={props.value} category={props.value} />
      )}
      {(props.value === 'Quran' || props.value === 'Evidence') && tabIndex === 0 && (
        <DisplaySingleFile key={props.value} category={props.value} />
      )}
      {(props.value === 'Khutbah' ||
        props.value === 'Tafseer' ||
        props.value === 'Facebook' ||
        props.value === 'Youtube') &&
        tabIndex === 1 && <AddFolder key={props.value} category={props.value} />}
      {(props.value === 'Khutbah' ||
        props.value === 'Tafseer' ||
        props.value === 'Facebook' ||
        props.value === 'Youtube') &&
        tabIndex === 0 && <SelectScholar key={props.value} category={props.value} />}
    </>
  );
};
export default ManageTabs;
