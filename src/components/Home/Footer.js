import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const footer = () => {
  return (
    <>
      <AppBar position="static" sx={{ top: 'auto', bottom: 0, background: 'transparent' }}>
        <Toolbar>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: {
                md: 18,
                sm: 18,
                xs: 10
              }
            }}
            color={'white'}>
            อัลกุรอานสอนเรา Al-Quran Teaches Us
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: {
                md: 15,
                sm: 15,
                xs: 10
              },
              marginLeft: 'auto'
            }}>
            ADMIN
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default footer;
