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
import AddFile from './AddFile';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowBack from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <Box m="auto">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {props.files.map((file, index) => (
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
                        <FolderIcon />
                      </Avatar>
                    }
                    title={
                      <Typography sx={{ width: 200 }} noWrap color={theme.palette.primary.dark}>
                        {file.name}
                      </Typography>
                    }></CardHeader>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default fileView;
