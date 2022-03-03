import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar
} from '@mui/material';
import theme from '../core/theme';
// import db from '../firebase';
// import { doc, setDoc } from 'firebase/firestore';
import PlusIcon from '@mui/icons-material/AddCircleOutline';

// async function addData(collection, document, data) {
//   // db.collection(collection).doc(document).set(data);
//   const docRef = doc(db, collection, document);
//   await setDoc(docRef, data).then(() => console.log('added'));
// }

const addData = () => {
  const [Scholar, setScholar] = useState('');
  const [FolderName, setFolderName] = useState('');
  const [FileName, setFileName] = useState('');
  const [Link, setLink] = useState('');
  const [isClick, setIsClick] = useState(false);

  const handleNewFolder = () => {
    setIsClick(true);
    setFolderName('');
  };
  return (
    <>
      <Box display="flex" sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Box m="auto">
          <Toolbar />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ mt: 2 }}>
              เลือกอาจารย์
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              autoWidth
              label="เลือกโฟลเดอร์หลัก"
              value={Scholar}
              sx={{
                mt: 2,
                height: 55,
                borderRadius: 2,
                width: 250,
                backgroundColor: 'white'
              }}
              onChange={(event) => setScholar(event.target.value)}>
              <MenuItem value={'HanafeeKhutbah'}>อ.ฮานาฟี</MenuItem>
              <MenuItem value={'Ashabulyameen'}>อ.อัสฮาบุ้ลยามีน ปานนพภา</MenuItem>
              <MenuItem value={'Khalid'}>อ.คอลิด อารีบี </MenuItem>
              <MenuItem value={'Other'}>อื่นๆ</MenuItem>
            </Select>
            <FormControl>
              <Stack direction="row">
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
                  <MenuItem value={'HanafeeKhutbah'}>อ.ฮานาฟี</MenuItem>
                  <MenuItem value={'Ashabulyameen'}>อ.อัสฮาบุ้ลยามีน ปานนพภา</MenuItem>
                  <MenuItem value={'Khalid'}>อ.คอลิด อารีบี </MenuItem>
                  <MenuItem value={'Other'}>อื่นๆ</MenuItem>
                </Select>
                <Button
                  onClick={() => handleNewFolder()}
                  variant="text"
                  sx={{ mt: 2, color: theme.palette.primary.dark, height: 55 }}>
                  <PlusIcon />
                  ADD FOLDER
                </Button>
              </Stack>
              {isClick === true && (
                <TextField
                  sx={{ mt: 2, width: 350, backgroundColor: 'white', borderRadius: 2 }}
                  value={FolderName}
                  required
                  label="โฟลเดอร์หลัก"
                  onChange={(event) => setFolderName(event.target.value)}
                />
              )}
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
                sx={{ mt: 2, backgroundColor: theme.palette.primary.dark, color: 'white' }}
                variant="contained">
                POST
              </Button>
            </FormControl>
            <Toolbar />
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default addData;
