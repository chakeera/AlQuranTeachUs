import {
  AppBar,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  CircularProgress
} from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import theme from '../core/theme';
// import ManageTabs from '../components/AdminSide/ManageTabs';
import AddExternalLinks from '../components/AdminSide/AddExternalLinks';
import tabs from '../components/Data/TabsData';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
// import { connect } from 'react-redux';

const manage = () => {
  const [page, setPage] = useState(
    <AddExternalLinks />
    // <ManageTabs value="Khutbah" title="คุตบะห์วันศุกร์ ตัฟซีรอัลกุรอาน" />
  );
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      navigate('/manage');
    }

    if (!authToken) {
      navigate('/login');
    }
  }, []);

  const logout = async () => {
    const auth = getAuth();
    setLoading(true);
    await signOut(auth).then(() => {
      setLoading(false);
      sessionStorage.removeItem('Auth Token');
      navigate('/login');
    });
  };
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');
    console.log(authToken);
    if (authToken) {
      navigate('/manage');
    }

    if (!authToken) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
            background: theme.palette.primary.dark,
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}
        >
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
          }}
        >
          <Toolbar />
          <Box
            sx={{
              background: theme.palette.primary.dark,
              overflow: 'auto',
              height: '100vh'
            }}
          >
            <List>
              {tabs.map((data) => (
                <ListItem
                  sx={{ borderBottom: 1, borderColor: 'white' }}
                  onClick={() => setPage(data.page)}
                  button
                  key={data.title}
                >
                  <ListItemText
                    sx={{
                      color: 'white'
                    }}
                    primary={data.title}
                  />
                </ListItem>
              ))}
              <ListItem sx={{ borderBottom: 1, borderColor: 'white' }} onClick={logout} button>
                <ListItemText
                  sx={{
                    color: 'white'
                  }}
                  primary="Log Out"
                />
                {loading && <CircularProgress sx={{ mr: 2 }} size={20} />}
              </ListItem>
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

// const mapStateToProps = () => {
//   return {
//     // data: state.firestore.data
//   };
// };

export default manage;
