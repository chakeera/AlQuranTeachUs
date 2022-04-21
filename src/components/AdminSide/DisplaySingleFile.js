import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Grid,
  Toolbar,
  Typography
} from '@mui/material';
import theme from '../../core/theme';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import DeleteData from './DeleteData';

const displaySingleData = (props) => {
  var collection = props.category;
  var data = props.data[collection];

  return (
    <>
      <Box display="flex" sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Container sx={{ mx: 3, my: 2 }}>
          <Toolbar />
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data != (null || undefined) ? (
              Object.entries(data).map(
                ([key, value]) =>
                  value !== null && (
                    <Grid key={key} item xs={12} md={4}>
                      <Card sx={{ width: '275px', display: 'flex' }}>
                        <CardHeader
                          action={<DeleteData collection={collection} type="folder" docId={key} />}
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
                            <Button href={value.link} sx={{ color: 'white', textAlign: 'left' }}>
                              <Typography
                                sx={{ width: 150 }}
                                noWrap
                                color={theme.palette.primary.dark}
                              >
                                {value.fileName}
                              </Typography>
                            </Button>
                          }
                        ></CardHeader>
                      </Card>
                      <Toolbar />
                    </Grid>
                  )
              )
            ) : (
              <Box display="flex" m="auto" height="30vh">
                <Typography align="center">ไม่ผบข้อมูล</Typography>
              </Box>
            )}
          </Grid>
        </Container>
      </Box>
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
