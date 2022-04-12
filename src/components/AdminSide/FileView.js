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
import AddFile from './AddFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowBack from '@mui/icons-material/ArrowBack';
import DeleteData from './DeleteData';
import { useState } from 'react';

const fileView = (props) => {
  const [searchInput, setSearchInput] = useState('');

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
                        <Button href={file.link} sx={{ color: 'white', textAlign: 'left' }}>
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

export default fileView;
