import { Avatar, Box, Button, Card, CardHeader, Container, Grid, Typography } from '@mui/material';
import theme from '../../core/theme';
import FolderIcon from '@mui/icons-material/Folder';

const folderView = (props) => {
  return (
    <Box height="50vh" display="flex">
      <Box m="auto">
        <Container>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              {props.folders.map((folder, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    props.setFolderClick(true);
                    props.setIndex(index);
                  }}>
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
  );
};

export default folderView;
