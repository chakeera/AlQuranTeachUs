import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import theme from '../core/theme';
import db from '../firebase';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import PlusIcon from '@mui/icons-material/AddCircleOutline';

const addDataSNS = (props) => {
  const [FolderName, setFolderName] = useState('');
  const [NewFolderName, setNewFolderName] = useState('');
  const [FileName, setFileName] = useState('');
  const [Link, setLink] = useState('');
  const [isNewFolderClick, setIsNewFolderClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const collection = props.typename;
  const data = {
    [FileName]: {
      Name: FileName,
      Link: Link
    }
  };
  const setData = async (collection, folder, newFolder) => {
    console.log(collection, '=> collectionName');
    if (isNewFolderClick && FolderName === '') {
      const docRef = doc(db, collection, newFolder);
      setLoading(true);
      await setDoc(docRef, data).then(() => {
        console.log('added');
        setLoading(false);
        setFolderName('');
        setNewFolderName('');
        setFileName('');
        setLink('');
        setIsNewFolderClick(false);
      });
    } else {
      const docRef = doc(db, collection, folder);
      setLoading(true);
      await updateDoc(docRef, data).then(() => {
        console.log('added');
        setLoading(false);
        setFolderName('');
        setFileName('');
        setLink('');
      });
    }
  };
  return (
    <>
      <Box display="flex" sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Box m="auto">
          <Toolbar />
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
                <MenuItem value={'01YT'}>choice1</MenuItem>
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
            </Stack>
            {isNewFolderClick === true && (
              <TextField
                sx={{ mt: 2, width: 350, backgroundColor: 'white', borderRadius: 2 }}
                value={NewFolderName}
                required
                label="โฟลเดอร์หลัก"
                onChange={(event) => setNewFolderName(event.target.value)}
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
              disabled={loading}
              onClick={() => setData(collection, FolderName, NewFolderName)}
              sx={{ mt: 2, backgroundColor: theme.palette.primary.dark, color: 'white' }}
              variant="contained">
              {loading && (
                <CircularProgress sx={{ mr: 2, color: theme.palette.primary.dark }} size={20} />
              )}
              POST
            </Button>
          </FormControl>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};
export default addDataSNS;
