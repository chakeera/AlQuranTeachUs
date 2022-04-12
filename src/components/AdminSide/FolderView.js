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
import FolderIcon from '@mui/icons-material/Folder';
import { useState } from 'react';

const folderView = (props) => {
  const [searchInput, setSearchInput] = useState('');

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const filteredData = props.folders.filter((el) => {
    if (searchInput === '') {
      return el;
    } else {
      return el.toLowerCase().includes(searchInput);
    }
  });

  return (
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
      <Container sx={{ mx: 6, my: 4 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {filteredData.map((folder, index) => (
            <Grid key={index} item xs={12} md={4}>
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
                  title={
                    <Button
                      sx={{ color: 'white', textAlign: 'left' }}
                      onClick={() => {
                        props.setFolderClick(true);
                        props.setIndex(index);
                      }}
                    >
                      <Typography sx={{ width: 150 }} noWrap color={theme.palette.primary.dark}>
                        {folder}
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
  );
};

export default folderView;
