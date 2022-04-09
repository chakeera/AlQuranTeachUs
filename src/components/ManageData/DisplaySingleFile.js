import { Avatar, Box, Button, Card, CardHeader, Container, Grid, Typography } from '@mui/material';
import theme from '../../core/theme';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import DeleteData from './DeleteData';

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
          <Container sx={{ mx: 5, my: 5 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {folder.map((data, index) => (
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
