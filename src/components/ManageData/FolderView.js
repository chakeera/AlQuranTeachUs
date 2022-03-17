import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import theme from '../../core/theme';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const folderView = (props) => {
  return (
    <Box m="auto">
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {props.folders.map((folder, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Card sx={{ width: '275px', display: 'flex' }}>
                <CardHeader
                  action={
                    <div>
                      <IconButton sx={{ color: 'red' }}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
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
                      <Button
                        sx={{ color: 'white' }}
                        onClick={() => {
                          props.setFolderClick(true);
                          props.setIndex(index);
                        }}>
                        <FolderIcon />
                      </Button>
                    </Avatar>
                  }
                  title={
                    <Typography sx={{ width: 200 }} noWrap color={theme.palette.primary.dark}>
                      {folder}
                    </Typography>
                  }></CardHeader>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default folderView;
