import {
  AppBar,
  Tabs,
  Typography,
  Tab,
  Toolbar,
  Snackbar,
  Alert,
  FormControl,
  TextField,
  Button
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { connect } from 'react-redux';
import theme from '../../core/theme';
import { createExternalLink } from '../../store/action/databaseAction';

const externalLink = (props) => {
  const [alert, setAlert] = useState(false);
  const [facebookLink, setFacebookLink] = useState('');
  const [makkahLink, setMakkahLink] = useState('');
  const facebookState = { collection: 'ExternalLink', link: facebookLink, type: 'facebook' };
  const makkahState = { collection: 'ExternalLink', link: makkahLink, type: 'makkah' };

  const handleClose = () => {
    setAlert(false);
  };

  const handleFacebookSubmit = (e) => {
    setAlert(true);
    e.preventDefault();
    props.createExternalLink(facebookState);
    setFacebookLink('');
  };
  const handleMakkahSubmit = (e) => {
    setAlert(true);
    e.preventDefault();
    props.createExternalLink(makkahState);
    setMakkahLink('');
  };
  return (
    <>
      <Typography sx={{ my: 2, fontWeight: 'bold' }} variant="h6" textAlign="center">
        คุตบะห์วันศุกร์-บรรยาย Live สด
      </Typography>
      <Box>
        <AppBar elevation={0} position="static">
          <Tabs
            value={0}
            TabIndicatorProps={{ style: { background: theme.palette.primary.dark } }}
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="เพิ่มลิงค์ไลฟ์สด" />
          </Tabs>
        </AppBar>
      </Box>
      <Box display="flex" sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Box m="auto">
          <Toolbar />
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            key="bottomcenter"
            open={alert}
            autoHideDuration={5000}
            onClose={handleClose}
          >
            <Alert severity="success" sx={{ width: '100%' }}>
              อัพเดดข้อมูล............
            </Alert>
          </Snackbar>
          <form onSubmit={handleFacebookSubmit}>
            <FormControl fullWidth>
              <Typography>คุตบะห์วันศุกร์-บรรยาย Live สด</Typography>
              <TextField
                sx={{ mt: 2, width: 350, backgroundColor: 'white', borderRadius: 1 }}
                value={facebookLink}
                required
                label="ลิงค์"
                onChange={(event) => setFacebookLink(event.target.value)}
              />
              <Button
                type="submit"
                sx={{ mt: 2, backgroundColor: theme.palette.primary.dark, color: 'white' }}
                variant="contained"
              >
                POST
              </Button>
              <Toolbar />
            </FormControl>
          </form>
          <form onSubmit={handleMakkahSubmit}>
            <FormControl>
              <Typography>Makkah Live สด</Typography>
              <TextField
                sx={{ mt: 2, width: 350, backgroundColor: 'white', borderRadius: 1 }}
                value={makkahLink}
                required
                label="ลิงค์"
                onChange={(event) => setMakkahLink(event.target.value)}
              />
              <Button
                type="submit"
                sx={{ mt: 2, backgroundColor: theme.palette.primary.dark, color: 'white' }}
                variant="contained"
              >
                POST
              </Button>
              <Toolbar />
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { createExternalLink: (data) => dispatch(createExternalLink(data)) };
};
export default connect(null, mapDispatchToProps)(externalLink);
