import { Box, Container, Typography } from '@mui/material';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import FolderView from './FolderView';
import FileView from './FileView';

const displayData = (props) => {
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
)(displayData);
