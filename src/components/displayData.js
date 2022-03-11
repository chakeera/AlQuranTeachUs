import { Avatar, Box, Button, Card, CardHeader, Container, Grid, Typography } from '@mui/material';
import theme from '../core/theme';
import FolderIcon from '@mui/icons-material/Folder';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

const displayData = (props) => {
  var folderName = [];
  var collection = props.scholar + props.category;
  var data = props.data[collection];
  if (data != (null || undefined)) {
    folderName = [];
    Object.values(data).map((item) => {
      folderName.push(item.folderName);
    });
  }

  return (
    <>
      {folderName.length === 0 ? (
        <Box height="50vh" display="flex">
          <Box m="auto">
            <Container>
              <Typography align="center">ไม่ผบข้อมูล</Typography>
            </Container>
          </Box>
        </Box>
      ) : (
        <Box height="50vh" display="flex">
          <Box m="auto">
            <Container>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                  {folderName.map((folder, index) => (
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
                          title={<Typography noWrap>{folder}</Typography>}></CardHeader>
                      </Card>
                    </Button>
                  ))}
                </Grid>
              </Grid>
            </Container>
          </Box>
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
