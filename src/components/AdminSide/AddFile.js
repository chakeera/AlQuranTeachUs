import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Typography
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
  const state = {
    collection: props.collection,
    docId: props.docId,
    newFile: { name: FileName, link: Link }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewFile(state);
    setFileName('');
    setLink('');
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button sx={{ mt: 6, mx: 2, mb: 2 }} variant="text" onClick={handleClickOpen}>
        <AddCircleIcon sx={{ color: theme.palette.primary.dark }} />
        <Typography
          sx={{
            mx: 1,
            textAlign: 'center',
            color: theme.palette.primary.dark,
            fontWeight: 'bolder',
            fontSize: 18
          }}
        >
          เพิ่มไฟล์
        </Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Post
            </Button>
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
