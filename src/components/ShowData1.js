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
import theme from '../core/theme';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
// import { collection, getDocs } from 'firebase/firestore';
// import db from '../firebase';

const showData = (props) => {
  // const [FolderNames, setFolderNames] = useState([]);
  const [Scholar, setScholar] = useState('Hanafee');
  console.log('from prop', props.data);

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
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                  {props.data.map((folder, index) => (
                    <Button key={index}>
                      <Card sx={{ width: '275px', display: 'flex' }}>
                        <CardHeader
                          sx={{
                            display: 'flex',
                            overflow: 'hidden',
                            '& .MuiCardHeader-content': {
                              overflow: 'hidden'
                            }
                          }}
                          avatar={
                            <Avatar sx={{ bgcolor: theme.palette.primary.dark }}>
                              <FolderIcon />
                            </Avatar>
                          }
                          title={<Typography noWrap>{folder.folderName}</Typography>}></CardHeader>
                      </Card>
                    </Button>
                  ))}
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
};

const mapStateToProps = (state, props) => {
  console.log('from map', state);
  console.log('from map props', props);
  return {
    data: [state.firestore.data.Khutbah.Hanafee]
  };
};
export default compose(
  firestoreConnect(() => ['Khutbah']),
  connect(mapStateToProps)
)(showData);
