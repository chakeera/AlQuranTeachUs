import { Avatar, Box, Button, Card, CardHeader, Container, Grid, Typography } from '@mui/material';
import theme from '../core/theme';
import FolderIcon from '@mui/icons-material/Folder';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';
import AddFile from './addFile';

const displayData = (props) => {
  const [isFolderClick, setFolderClick] = useState(false);
  const [index, setIndex] = useState(-1);
  var docId = [];
  var folderName = [];
  var files = [];
  var collection = props.scholar + props.category;
  var data = props.data[collection];
  if (data != (null || undefined)) {
    folderName = [];
    Object.values(data).map((item) => {
      folderName.push(item.folderName);
      files.push(item.files);
    });
    docId = [];
    Object.keys(data).map((key) => docId.push(key));
  }

  useEffect(() => {
    if (isFolderClick === true) {
      props.setDisplay(false);
    } else {
      props.setDisplay(true);
    }
  });
  return (
    <>
      {folderName.length === 0 ? (
        <Box height="50vh" display="flex">
          {/* when database is empty */}
          <Box m="auto">
            <Container>
              <Typography align="center">ไม่ผบข้อมูล</Typography>
            </Container>
          </Box>
        </Box>
      ) : (
        <Box>
          {/* when database returns data */}
          {isFolderClick !== true ? (
            <Box height="50vh" display="flex">
              {/* folderview */}
              <Box m="auto">
                <Container>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                      {folderName.map((folder, index) => (
                        <Button
                          key={index}
                          onClick={() => {
                            setFolderClick(true);
                            setIndex(index);
                          }}>
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
                              title={<Typography noWrap>{folder}</Typography>}></CardHeader>
                          </Card>
                        </Button>
                      ))}
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Box>
          ) : (
            <Box>
              {/* fileview */}
              <Container>
                <Button sx={{ my: 2, mx: 2 }} variant="text" onClick={() => setFolderClick(false)}>
                  <ArrowBack />
                  <Typography
                    sx={{
                      mx: 1,
                      textAlign: 'center',
                      color: theme.palette.primary.dark,
                      fontWeight: 'bolder',
                      fontSize: 18
                    }}>
                    กลับ
                  </Typography>
                </Button>
                <AddFile collection={collection} docId={docId[index]} />
                <Box height="50vh" display="flex">
                  <Box m="auto">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      <Grid item xs={12}>
                        {files[index].map((file, index) => (
                          <Button key={index} href={file.link}>
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
                                title={<Typography noWrap>{file.name}</Typography>}></CardHeader>
                            </Card>
                          </Button>
                        ))}
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </Box>
          )}
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
  firestoreConnect((props) => [props.scholar + props.category])
)(displayData);
