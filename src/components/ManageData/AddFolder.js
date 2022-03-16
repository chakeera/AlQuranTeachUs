import React, { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Toolbar
} from '@mui/material';
import theme from '../../core/theme';
import { createData } from '../../store/action/databaseAction';
import { connect } from 'react-redux';

const addData = (props) => {
  const [Scholar, setScholar] = useState('');
  const [FolderName, setFolderName] = useState('');
  const [FileName, setFileName] = useState('');
  const [Link, setLink] = useState('');
  const [alert, setAlert] = useState(false);
  const [Category, setCategory] = useState(props.typename);
  const collection = Scholar + Category;
  const state = {
    collection: collection,
    folderName: FolderName,
    files: [{ name: FileName, link: Link }]
  };

  const handleSubmit = (e) => {
    setAlert(true);
    e.preventDefault();
    props.createData(state);
    setScholar('');
    setFolderName('');
    setFileName('');
    setLink('');
  };

  const handleClose = () => {
    setAlert(false);
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
            onClose={handleClose}>
            <Alert severity="success" sx={{ width: '100%' }}>
              อัพเดดข้อมูล............
            </Alert>
          </Snackbar>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" sx={{ mt: 2 }}>
                เลือกอาจารย์
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                autoWidth
                label="เลือกอาจารย์"
                value={Scholar}
                sx={{
                  mt: 2,
                  height: 55,
                  borderRadius: 2,
                  width: 250,
                  backgroundColor: 'white'
                }}
                onChange={(event) => setScholar(event.target.value)}>
                <MenuItem value={'Hanafee'}>อ.ฮานาฟี</MenuItem>
                <MenuItem value={'Ashabulyameen'}>อ.อัสฮาบุ้ลยามีน ปานนพภา</MenuItem>
                {Category !== 'Tafseer' && <MenuItem value={'Khalid'}>อ.คอลิด อารีบี </MenuItem>}
                <MenuItem value={'Other'}>อื่นๆ</MenuItem>
              </Select>
              {(Category === 'Tafseer' || Category === 'Talk') && (
                <FormControl>
                  <InputLabel id="demo-simple-select-label" sx={{ mt: 2 }}>
                    เลือกประเภท
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    autoWidth
                    label="เลือกประเภท"
                    value={Category}
                    sx={{
                      mt: 2,
                      height: 55,
                      borderRadius: 2,
                      width: 250,
                      backgroundColor: 'white'
                    }}
                    onChange={(event) => setCategory(event.target.value)}>
                    <MenuItem value={'Tafseer'}>ตัฟซีร</MenuItem>
                    <MenuItem value={'Talk'}>บรรยาย</MenuItem>
                  </Select>
                </FormControl>
              )}
              <TextField
                sx={{ mt: 2, width: 350, backgroundColor: 'white', borderRadius: 2 }}
                value={FolderName}
                required
                label="โฟลเดอร์หลัก"
                onChange={(event) => setFolderName(event.target.value)}
              />
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
              <Button
                type="submit"
                sx={{ mt: 2, backgroundColor: theme.palette.primary.dark, color: 'white' }}
                variant="contained">
                POST
              </Button>
            </FormControl>
            <Toolbar />
          </form>
        </Box>
      </Box>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { createData: (data) => dispatch(createData(data)) };
};

export default connect(null, mapDispatchToProps)(addData);
