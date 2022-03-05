import { Button, CircularProgress, FormControl, TextField, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import theme from '../core/theme';
import db from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const addData1Level = (props) => {
  const [FileName, setFileName] = useState('');
  const [Link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const collection = props.typename;
  const data = {
    Name: FileName,
    Link: Link
  };
  const setData = async (collection, file) => {
    console.log(collection, '=> collectionName');

    const docRef = doc(db, collection, file);
    setLoading(true);
    await setDoc(docRef, data).then(() => {
      console.log('added');
      setLoading(false);
      setFileName('');
      setLink('');
    });
  };
  return (
    <>
      <Box display="flex" sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Box m="auto">
          <Toolbar />
          <FormControl fullWidth>
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
              onClick={() => setData(collection, FileName)}
              sx={{ mt: 2, backgroundColor: theme.palette.primary.dark, color: 'white' }}
              variant="contained">
              {loading && (
                <CircularProgress sx={{ mr: 2, color: theme.palette.primary.dark }} size={20} />
              )}
              POST
            </Button>
            <Toolbar />
          </FormControl>
        </Box>
      </Box>
    </>
  );
};
export default addData1Level;
