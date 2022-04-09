import { Alert, Box, Button, FormControl, Snackbar, TextField, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import theme from '../../core/theme';
import { createSingleData } from '../../store/action/databaseAction';
const addSingleFileData = (props) => {
  const [alert, setAlert] = useState(false);
  const [FileName, setFileName] = useState('');
  const [Link, setLink] = useState('');
  const state = {
    collection: props.category,
    fileName: FileName,
    link: Link
  };

  const handleClose = () => {
    setAlert(false);
  };
  const handleSubmit = (e) => {
    setAlert(true);
    e.preventDefault();
    props.createSingleData(state);
    setFileName('');
    setLink('');
  };
  return (
    <>
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
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                sx={{ mt: 2, width: 350, backgroundColor: 'white', borderRadius: 1 }}
                value={FileName}
                required
                label="ชื่อไฟล์"
                onChange={(event) => setFileName(event.target.value)}
              />
              <TextField
                sx={{ mt: 2, width: 550, backgroundColor: 'white', borderRadius: 1 }}
                value={Link}
                required
                label="ลิงค์ไฟล์ mp3 หรือ Youtube"
                onChange={(event) => setLink(event.target.value)}
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
  return { createSingleData: (data) => dispatch(createSingleData(data)) };
};
export default connect(null, mapDispatchToProps)(addSingleFileData);
