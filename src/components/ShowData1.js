import {
  Box,
  Avatar,
  Button,
  Card,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  Grid,
  Container,
  Toolbar
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import React, { useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
import theme from '../core/theme';
// import db from '../firebase';

const showData = () => {
  // const [FolderNames, setFolderNames] = useState([]);
  const [Scholar, setScholar] = useState('Hanafee');

  // const getFolderName = async () => {
  //   const folder = [];
  //   const querySnapshot = await getDocs(collection(db, Scholar + props.typename));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, ' => ', doc.data());
  //     folder.push(doc.id);
  //   });
  //   setFolderNames(folder);
  // };

  // useEffect(() => getFolderName(), []);

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
        <FormControl sx={{ my: 2, ml: 4 }} fullWidth>
          <Stack direction="row">
            <InputLabel sx={{ mt: 2 }} id="demo-simple-select-label">
              เลือกอาจารย์
            </InputLabel>
            <Select
              autoWidth
              label="เลือกอาจารย์"
              value={Scholar}
              sx={{
                mt: 2,
                height: 55,
                borderRadius: 2,
                width: 250
              }}
              onChange={(event) => {
                setScholar(event.target.value);
              }}>
              <MenuItem value={'Hanafee'}>อ.ฮานาฟี</MenuItem>
              <MenuItem value={'Ashabulyameen'}>อ.อัสฮาบุ้ลยามีน ปานนพภา</MenuItem>
              <MenuItem value={'Khalid'}>อ.คอลิด อารีบี </MenuItem>
              <MenuItem value={'Other'}>อื่นๆ</MenuItem>
            </Select>
          </Stack>
        </FormControl>
        <Box display="flex">
          <Box m="auto">
            <Container>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((name, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Button>
                      <Card>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ bgcolor: theme.palette.primary.dark }}>
                              <FolderIcon />
                            </Avatar>
                          }
                          title={<Typography>FolderName</Typography>}></CardHeader>
                      </Card>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
};
export default showData;
