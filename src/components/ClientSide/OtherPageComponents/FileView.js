import { Avatar, Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import theme from '../../../core/theme';
import './folderView.css';
import ArrowBack from '@mui/icons-material/ArrowBack';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const contentFileView = (props) => {
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
        </Grid>
        <Box className="folder-view-grid-container">
          {props.files.map((file) => (
            <Button
              key={file.name}
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
