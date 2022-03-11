import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  // Stack,
  TextField,
  Toolbar
} from '@mui/material';
import theme from '../core/theme';
// import db from '../firebase';
// import { doc, setDoc, updateDoc } from 'firebase/firestore';
// import PlusIcon from '@mui/icons-material/AddCircleOutline';
import { createData } from '../store/action/databaseAction';
import { connect } from 'react-redux';

const addData = (props) => {
  const [Scholar, setScholar] = useState('');
  const [FolderName, setFolderName] = useState('');
  // const [NewFolderName, setNewFolderName] = useState('');
  const [FileName, setFileName] = useState('');
  const [Link, setLink] = useState('');
  // const [isNewFolderClick, setIsNewFolderClick] = useState(false);
  const [loading] = useState(false);
  const [Category, setCategory] = useState(props.typename);
  const collection = Scholar + Category;
  const state = {
    collection: collection,
    folderName: FolderName,
    files: [{ name: FileName, link: Link }]
  };
  // const data = {
  //   [FileName]: {
  //     Name: FileName,
  //     Link: Link
  //   }
  // };

  // const setData = async (collection, folder, newFolder) => {
  //   console.log(collection, '=> collectionName');
  //   if (isNewFolderClick) {
  //     const docRef = doc(db, collection, newFolder);
  //     setLoading(true);
  //     await setDoc(docRef, data).then(() => {
  //       console.log('added');
  //       setLoading(false);
  //       setScholar('');
  //       setFolderName('');
  //       setNewFolderName('');
  //       setFileName('');
  //       setLink('');
  //       setIsNewFolderClick(false);
  //     });
  //   } else {
  //     const docRef = doc(db, collection, folder);
  //     setLoading(true);
  //     await updateDoc(docRef, data).then(() => {
  //       console.log('added');
  //       setLoading(false);
  //       setScholar('');
  //       setFolderName('');
  //       setFileName('');
  //       setLink('');
  //     });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createData(state);
  };
  return (
    <>
      <Box display="flex" sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Box m="auto">
          <Toolbar />
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
                {Category === 'Khutbah' && <MenuItem value={'Khalid'}>อ.คอลิด อารีบี </MenuItem>}
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
              <FormControl>
                {/* <Stack direction="row">
                  <InputLabel id="demo-simple-select-label" sx={{ mt: 2 }}>
                    เลือกโฟลเดอร์หลัก
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    autoWidth
                    label="เลือกโฟลเดอร์หลัก"
                    value={FolderName}
                    sx={{
                      mt: 2,
                      height: 55,
                      borderRadius: 2,
                      width: 350,
                      backgroundColor: 'white'
                    }}
                    onChange={(event) => setFolderName(event.target.value)}>
                    <MenuItem value={'02tafseer'}>choice1</MenuItem>
                    <MenuItem value={'HanafeeKhutbah'}>อ.ฮานาฟี</MenuItem>
                    <MenuItem value={'Ashabulyameen'}>อ.อัสฮาบุ้ลยามีน ปานนพภา</MenuItem>
                    <MenuItem value={'Khalid'}>อ.คอลิด อารีบี </MenuItem>
                    <MenuItem value={'Other'}>อื่นๆ</MenuItem>
                  </Select>
                  <Button
                    onClick={() => setIsNewFolderClick(true)}
                    variant="text"
                    sx={{ mt: 2, color: theme.palette.primary.dark, height: 55 }}>
                    <PlusIcon />
                    ADD FOLDER
                  </Button>
                </Stack> */}
                {/* {isNewFolderClick === true && ( */}
                <TextField
                  sx={{ mt: 2, width: 350, backgroundColor: 'white', borderRadius: 2 }}
                  value={FolderName}
                  required
                  label="โฟลเดอร์หลัก"
                  onChange={(event) => setFolderName(event.target.value)}
                />
                {/* )} */}
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
                  disabled={loading}
                  type="submit"
                  // onClick={handleSubmit()}
                  // onClick={() => setData(collection, FolderName, NewFolderName)}
                  sx={{ mt: 2, backgroundColor: theme.palette.primary.dark, color: 'white' }}
                  variant="contained">
                  {loading && (
                    <CircularProgress sx={{ mr: 2, color: theme.palette.primary.dark }} size={20} />
                  )}
                  POST
                </Button>
              </FormControl>
              <Toolbar />
            </FormControl>
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
