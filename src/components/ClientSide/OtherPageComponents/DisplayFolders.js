import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Box } from '@mui/system';
import { Button, Container, Typography } from '@mui/material';
// import FolderView from '../ManageData/FolderView';
import FolderView from './FolderView';
import FileView from './FileView';
import theme from '../../../core/theme';
import { ArrowBack } from '@mui/icons-material';

const displayFolders = (props) => {
  const [isFolderClick, setFolderClick] = useState(false);
  const [index, setIndex] = useState(-1);
  var docId = [];
  var folderName = [];
  var files = [];
  var collection = props.scholar + props.category;
  var data = props.data[collection];
  if (data != null || data != undefined) {
    folderName = [];
    Object.values(data).map((item) => {
      folderName.push(item.folderName);
      files.push(item.files);
    });
    docId = [];
    Object.keys(data).map((key) => docId.push(key));
  }

  return (
    <>
      {folderName.length === 0 ? (
        <Box height="80vh" sx={{ background: 'rgba(190, 212, 186,0.7)' }}>
          <Button
            href="/"
            sx={{
              mx: 2,
              mt: { xs: 2, md: 4 },
              mb: { xs: 2, md: 0 },
              color: theme.palette.primary.dark,
              fontWeight: 'bolder',
              fontSize: 18
            }}
            variant="text"
          >
            <ArrowBack></ArrowBack>กลับหน้าหลัก
          </Button>
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
            <FolderView
              collection={collection}
              folders={folderName}
              docId={docId}
              setIndex={setIndex}
              setFolderClick={setFolderClick}
            />
          ) : (
            <FileView
              collection={collection}
              docId={docId[index]}
              files={files[index]}
              setFolderClick={setFolderClick}
            />
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
)(displayFolders);
