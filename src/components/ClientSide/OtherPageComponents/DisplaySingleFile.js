import { ArrowBack } from '@mui/icons-material';
import { Avatar, Button, Container, Grid, TextField, Typography } from '@mui/material';
import Appbar from '../../../components/SharedComponents/Appbar';
import Footer from '../../../components/SharedComponents/Footer';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Box } from '@mui/system';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import theme from '../../../core/theme';
import background from '../../../assets/images/background.png';
import { useState } from 'react';
import './folderView.css';

const displaySingleFile = (props) => {
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
      <Box style={styles.container}>
        <Box sx={{ flexDirection: 'column' }}>
          <Appbar />
          {folder.length === 0 ? (
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
              <Box m="auto">
                <Container>
                  <Typography align="center">ไม่ผบข้อมูล</Typography>
                </Container>
              </Box>
            </Box>
          ) : (
            <Box className="folder-view-container">
              <Grid
                container
                justifyContent="space-between"
                alignContent="center"
                alignItems="center"
                direction="row"
              >
                <Grid item>
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
                </Grid>
                <Grid item>
                  <TextField
                    onChange={inputHandler}
                    label="ค้นหา......"
                    InputLabelProps={{
                      style: { color: theme.palette.primary.dark }
                    }}
                    sx={{
                      mx: 2,
                      mt: { xs: 2, md: 2 },
                      mb: { xs: 2, md: 0 },
                      backgroundColor: 'white',
                      borderRadius: 1
                    }}
                  />
                </Grid>
              </Grid>
              <Box className="folder-view-grid-container">
                {filteredData.map((folder, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    className="folder-view-item"
                    href={folder.link}
                    startIcon={
                      <Avatar sx={{ bgcolor: theme.palette.primary.dark }}>
                        <InsertDriveFileIcon />
                      </Avatar>
                    }
                    sx={{
                      justifyContent: 'start',
                      bgcolor: 'white',
                      '&:hover': { backgroundColor: 'white' }
                    }}
                  >
                    <Typography noWrap textOverflow="ellipsis">
                      {folder.fileName}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </Box>
          )}
          <Footer />
        </Box>
      </Box>
    </>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minWidth: '100vw',
    minHeight: '100vh',
    width: '100%',
    height: '100%',
    backgroundAttachment: 'fixed'
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.firestore.data
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [props.category])
)(displaySingleFile);
