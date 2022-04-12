import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import theme from '../../core/theme';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import DeleteData from './DeleteData';
import { useState } from 'react';

const displaySingleData = (props) => {
  var folder = [];
  var docId = [];
  var collection = props.category;
  var data = props.data[collection];
  if (data != (null || undefined)) {
    folder = [];
    Object.values(data).map((item) => {
      folder.push(item);
    });
    docId = [];
    Object.keys(data).map((key) => docId.push(key));
  }

  const [searchInput, setSearchInput] = useState('');

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const filteredData = folder.filter((el) => {
    if (searchInput === '') {
      return el;
    } else {
      return el.fileName.toLowerCase().includes(searchInput);
    }
  });

  return (
    <>
      {folder.length === 0 ? (
        <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
          <Box height="50vh" display="flex">
            <Box m="auto">
              <Container>
                <Typography align="center">ไม่ผบข้อมูล</Typography>
              </Container>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box display="flex" sx={{ backgroundColor: theme.palette.secondary.main }}>
          <Container sx={{ mx: 3, my: 2 }}>
            <Box sx={{ my: 2 }}>
              <TextField
                onChange={inputHandler}
                label="ค้นหา......"
                InputLabelProps={{
                  style: { color: theme.palette.primary.dark }
                }}
                sx={{
                  mx: 4,
                  mt: { xs: 2, md: 2 },
                  mb: { xs: 2, md: 0 },
                  width: 250,
                  borderRadius: 2
                }}
              />
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {filteredData.map((data, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <Card sx={{ width: '275px', display: 'flex' }}>
                    <CardHeader
                      action={
                        <DeleteData collection={collection} type="folder" docId={docId[index]} />
                      }
                      sx={{
                        display: 'flex',
                        overflow: 'hidden',
                        '& .MuiCardHeader-content': {
                          overflow: 'hidden'
                        }
                      }}
                      avatar={
                        <Avatar sx={{ bgcolor: theme.palette.primary.dark }}>
                          <InsertDriveFileIcon />
                        </Avatar>
                      }
                      title={
                        <Button href={data.link} sx={{ color: 'white', textAlign: 'left' }}>
                          <Typography sx={{ width: 150 }} noWrap color={theme.palette.primary.dark}>
                            {data.fileName}
                          </Typography>
                        </Button>
                      }
                    ></CardHeader>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.firestore.data
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [props.category])
)(displaySingleData);
