import {
  Button,
  Card,
  Avatar,
  CardHeader,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import { green } from '@mui/material/colors';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';

async function retrieveData(collectionName) {
  const snapshot = await getDocs(collection(db, collectionName));
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}

const showData = (props) => {
  const [Ajarn, setAjarn] = useState('HanafeeKhutbah');

  useEffect(() => {
    retrieveData(Ajarn);
  }, []);
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
              <MenuItem value={'HanafeeKhutbah'}>อ.ฮานาฟี</MenuItem>
              <MenuItem value={'AshabulyameenKhutbah'}>อ.อัสฮาบุ้ลยามีน ปานนพภา</MenuItem>
              <MenuItem value={'KhalidKhutbah'}>อ.คอลิด อารีบี </MenuItem>
              <MenuItem value={'OtherKhutbah'}>อื่นๆ</MenuItem>
            </Select>
          </Stack>
        </FormControl>
        {/* ADD HREF LINK HERE */}
        <Button>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: green[500] }}>
                  <FolderIcon />
                </Avatar>
              }
              title={<Typography>FolderName</Typography>}></CardHeader>
          </Card>
        </Button>
      </Container>
    </>
  );
};

export default showData;
