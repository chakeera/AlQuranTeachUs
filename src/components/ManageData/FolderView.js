import { Avatar, Box, Button, Card, CardHeader, Container, Grid, Typography } from '@mui/material';
import theme from '../../core/theme';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteData from './DeleteData';

const folderView = (props) => {
  return (
    <Box m="auto">
      <Container sx={{ mx: 6, my: 4 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {props.folders.map((folder, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Card sx={{ width: '275px', display: 'flex' }}>
                <CardHeader
                  action={
                    <DeleteData
                      collection={props.collection}
                      type="folder"
                      docId={props.docId[index]}
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
                      <FolderIcon />
                    </Avatar>
                  }
                  title={
                    <Button
                      sx={{ color: 'white', textAlign: 'left' }}
                      onClick={() => {
                        props.setFolderClick(true);
                        props.setIndex(index);
                      }}>
                      <Typography sx={{ width: 150 }} noWrap color={theme.palette.primary.dark}>
                        {folder}
                      </Typography>
                    </Button>
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
