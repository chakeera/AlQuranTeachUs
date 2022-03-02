import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import db from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import PlusIcon from '@mui/icons-material/AddCircleOutline';

async function addData(collection, document, data) {
  // db.collection(collection).doc(document).set(data);
  const docRef = doc(db, collection, document);
  await updateDoc(docRef, data).then(() => console.log('added'));
}

const addDataFrom = (props) => {
  const [FolderName, setFolderName] = useState('');
  const [FileName, setFileName] = useState('');
  const [Link, setLink] = useState('');
  const [Ajarn, setAjarn] = useState('Hanafee');
  const data = {
    [FolderName]: {
      [FileName]: Link
    }
  };

  return (
    <>
      <Container>
        <Typography>{props.typename}</Typography>
        <FormControl fullWidth>
          <Stack direction="row">
            <InputLabel sx={{ mt: 2 }} id="demo-simple-select-label">
              เลือกอาจารย์
            </InputLabel>
            <Select
              autoWidth
              label="เลือกอาจารย์"
              value={Ajarn}
              sx={{
                mt: 2,
                height: 55,
                borderRadius: 2,
                width: 250
              }}
              onChange={(event) => setAjarn(event.target.value)}>
              <MenuItem value={'Hanafee'}>อ.ฮานาฟี</MenuItem>
              <MenuItem value={'Ashabulyameen'}>อ.อัสฮาบุ้ลยามีน ปานนพภา</MenuItem>
              <MenuItem value={'Khalid'}>อ.คอลิด อารีบี </MenuItem>
              <MenuItem value={'Other'}>อื่นๆ</MenuItem>
            </Select>
          </Stack>
        </FormControl>
        <TextField
          sx={{ mt: 2, width: 250 }}
          label="Folder Name"
          type="text"
          variant="standard"
          value={FolderName}
          onChange={(event) => setFolderName(event.target.value)}
        />
        <Stack my={2} direction="row" spacing={2}>
          <TextField
            value={FileName}
            required
            label="File name"
            onChange={(event) => setFileName(event.target.value)}
          />
          <TextField
            value={Link}
            required
            label="Link"
            onChange={(event) => setLink(event.target.value)}
          />
        </Stack>
        <Button>
          <PlusIcon />
          ADD MORE FILE
        </Button>
        <Button onClick={() => addData(Ajarn, 'testo', data)} variant="contained">
          DONE
        </Button>
      </Container>
    </>
  );
};

export default addDataFrom;
