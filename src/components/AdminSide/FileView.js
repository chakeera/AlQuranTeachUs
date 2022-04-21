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
import DeleteIcon from '@mui/icons-material/Delete';
import AddFile from './AddFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowBack from '@mui/icons-material/ArrowBack';
import DeleteData from './DeleteData';
import { useState } from 'react';
import { connect } from 'react-redux';
import { deleteFolder } from '../../store/action/databaseAction';

const fileView = (props) => {
  const [searchInput, setSearchInput] = useState('');
  let isEmpty = false;

  const deleteFolder = () => {
    props.deleteFolder({ docId: props.docId, collection: props.collection });
    props.setFolderClick(false);
  };
  if (props.files.length === 0) {
    isEmpty = true;
  }

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const filteredData = props.files.filter((el) => {
    if (searchInput === '') {
      return el;
    } else {
      return el.name.toLowerCase().includes(searchInput);
    }
  });

  return (
    <Box m="auto">
      <Container>
        <Button
          sx={{ mt: 6, mx: 2, mb: 2 }}
          variant="text"
          onClick={() => props.setFolderClick(false)}
        >
          <ArrowBack />
          <Typography
            sx={{
              mx: 1,
              textAlign: 'center',
              color: theme.palette.primary.dark,
              fontWeight: 'bolder',
              fontSize: 18
            }}
          >
            กลับ
          </Typography>
        </Button>
        <AddFile collection={props.collection} docId={props.docId} />
        {isEmpty && (
          <Button
            sx={{ mt: 6, mx: 2, mb: 2, color: 'red' }}
            variant="outlined"
            onClick={deleteFolder}
          >
            <DeleteIcon />
            <Typography
              sx={{
                mx: 1,
                textAlign: 'center',
                color: theme.palette.primary.dark,
                fontWeight: 'bolder',
                fontSize: 18
              }}
            >
              ลบทั้งโฟลเดอร์
            </Typography>
          </Button>
        )}
        <Box m="auto">
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
          <Container sx={{ mx: 2, my: 4 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {filteredData.map((file, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <Card sx={{ width: '275px', display: 'flex' }}>
                    <CardHeader
                      action={
                        <DeleteData
                          type="file"
                          docId={props.docId}
                          collection={props.collection}
                          data={file}
                        />
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
                        <Button
                          onClick={() => {
                            window.open(file.link, '_blank');
                          }}
                          sx={{ color: 'white', textAlign: 'left' }}
                        >
                          <Typography sx={{ width: 150 }} noWrap color={theme.palette.primary.dark}>
                            {file.name}
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
      </Container>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFolder: (data) => dispatch(deleteFolder(data))
    // deleteFile: (data) => dispatch(deleteFile(data))
  };
};

export default connect(null, mapDispatchToProps)(fileView);
