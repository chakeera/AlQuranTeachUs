import { Avatar, Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import theme from '../../../core/theme';
import './folderView.css';
import ArrowBack from '@mui/icons-material/ArrowBack';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useState } from 'react';

const contentFileView = (props) => {
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
    <>
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
              onClick={() => props.setFolderClick(false)}
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
              <ArrowBack></ArrowBack>กลับ
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
          {filteredData.map((file, index) => (
            <Button
              key={index}
              variant="contained"
              className="folder-view-item"
              onClick={() => {
                window.open(file.link, '_blank');
              }}
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
                {file.name}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default contentFileView;
