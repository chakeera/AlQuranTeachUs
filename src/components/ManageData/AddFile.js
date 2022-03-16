import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Typography,
  Snackbar,
  Alert
} from '@mui/material';
import { useState } from 'react';
import theme from '../../core/theme';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { connect } from 'react-redux';
import { addNewFile } from '../../store/action/databaseAction';

const addFile = (props) => {
  const [open, setOpen] = useState(false);
  const [FileName, setFileName] = useState('');
  const [Link, setLink] = useState('');
  const [alert, setAlert] = useState(false);
  const state = {
    collection: props.collection,
    docId: props.docId,
    newFile: { name: FileName, link: Link }
  };

  const handleSubmit = (e) => {
    setAlert(true);
    e.preventDefault();
    props.addNewFile(state);
    setFileName('');
    setLink('');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAlertClose = () => {
    setAlert(false);
  };

  console.log(state);
  return (
    <>
      <Button sx={{ my: 2, mx: 2 }} variant="text" onClick={handleClickOpen}>
        <AddCircleIcon sx={{ color: theme.palette.primary.dark }} />
        <Typography
          sx={{
            mx: 1,
            textAlign: 'center',
            color: theme.palette.primary.dark,
            fontWeight: 'bolder',
            fontSize: 18
          }}>
          เพิ่มไฟล์
        </Typography>
      </Button>
      <Dialog open={open} onClose={handleAlertClose}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          key="bottomcenter"
          open={alert}
          autoHideDuration={5000}
          onClose={handleClose}>
          <Alert severity="success" sx={{ width: '100%' }}>
            อัพเดดข้อมูล............
          </Alert>
        </Snackbar>
        <form onSubmit={handleSubmit}>
          <DialogTitle>เพิ่มไฟล์</DialogTitle>
          <DialogContent>
            <TextField
              sx={{ mt: 2, width: 350, backgroundColor: 'white', borderRadius: 2 }}
              value={FileName}
              required
              label="ชื่อไฟล์"
              onChange={(event) => setFileName(event.target.value)}
            />
            <TextField
              sx={{ mt: 2, width: 550, backgroundColor: 'white', borderRadius: 2 }}
              value={Link}
              required
              label="ลิงค์ไฟล์ mp3 หรือ Youtube"
              onChange={(event) => setLink(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Post</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return { addNewFile: (data) => dispatch(addNewFile(data)) };
};

export default connect(null, mapDispatchToProps)(addFile);
