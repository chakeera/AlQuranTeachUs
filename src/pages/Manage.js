import {
  AppBar,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Box
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import theme from '../core/theme';
import ManageTabs from '../components/ManageData/ManageTabs';
import tabs from '../components/DataUtils/TabsData';

const manage = () => {
  const [page, setPage] = useState(
    <ManageTabs value="Khutbah" title="คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน" />
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
            background: theme.palette.primary.dark,
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}>
          <Toolbar>
            <Typography color="white" variant="h5" noWrap component="div">
              อัลกุรอ่านสอนเรา อัลมุวาฮิด สำหรับแอดมิน
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          variant="permanent"
          sx={{
            background: theme.palette.primary.dark,
            width: 250,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' }
          }}>
          <Toolbar />
          <Box
            sx={{
              background: theme.palette.primary.dark,
              overflow: 'auto',
              height: '100vh'
            }}>
            <List>
              {tabs.map((data) => (
                <ListItem
                  sx={{ borderBottom: 1, borderColor: 'white' }}
                  onClick={() => setPage(data.page)}
                  button
                  key={data.title}>
                  <ListItemText
                    sx={{
                      color: 'white'
                    }}
                    primary={data.title}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Container sx={{ my: 2 }}>{page}</Container>
        </Box>
      </Box>
    </>
  );
};

export default manage;
