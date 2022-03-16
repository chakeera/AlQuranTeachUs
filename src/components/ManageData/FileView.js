import { Avatar, Box, Button, Card, CardHeader, Container, Grid, Typography } from '@mui/material';
import theme from '../../core/theme';
import AddFile from './AddFile';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowBack from '@mui/icons-material/ArrowBack';

const fileView = (props) => {
  return (
    <Box>
      <Container>
        <Button sx={{ my: 2, mx: 2 }} variant="text" onClick={() => props.setFolderClick(false)}>
          <ArrowBack />
          <Typography
            sx={{
              mx: 1,
              textAlign: 'center',
              color: theme.palette.primary.dark,
              fontWeight: 'bolder',
              fontSize: 18
            }}>
            กลับ
          </Typography>
        </Button>
        <AddFile collection={props.collection} docId={props.docId} />
        <Box height="50vh" display="flex">
          <Box m="auto">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12}>
                {props.files.map((file, index) => (
                  <Button key={index} href={file.link}>
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
                        title={<Typography noWrap>{file.name}</Typography>}></CardHeader>
                    </Card>
                  </Button>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default fileView;
