import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import theme from '../../core/theme';
import { connect } from 'react-redux';
import { deleteFolder, deleteFile } from '../../store/action/databaseAction';

const deleteData = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    if (props.type === 'folder') {
      props.deleteFolder({ docId: props.docId, collection: props.collection });
    }
    if (props.type === 'file') {
      props.deleteFile({ docId: props.docId, collection: props.collection, file: props.data });
    }
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} sx={{ color: 'red' }}>
        <DeleteIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'ลบข้อมูล'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            คุณกำลังจะลบข้อมูล หากกดตกลงแล้วข้อมูลไม่สามารถกู้กลับมาได้
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: theme.palette.primary.dark, fontWeight: 'bolder', fontSize: 18 }}
            onClick={handleClose}
          >
            ยกเลิก
          </Button>
          <Button
            sx={{ color: theme.palette.primary.dark, fontWeight: 'bolder', fontSize: 18 }}
            onClick={handleDelete}
            autoFocus
          >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFolder: (data) => dispatch(deleteFolder(data)),
    deleteFile: (data) => dispatch(deleteFile(data))
  };
};

export default connect(null, mapDispatchToProps)(deleteData);
