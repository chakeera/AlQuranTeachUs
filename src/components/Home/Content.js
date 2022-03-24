import { Box, Grid } from '@mui/material';
import CustomImage from './CustomImage';
import Calendar from './Calendar';

const content = () => {
  return (
    <>
      <Box sx={{ background: 'rgba(190, 212, 186,0.7)' }}>
        <Grid container direction={{ md: 'row', sm: 'column', xs: 'column' }}>
          <Grid item sm={6} xs={12} md={6} direction="column" padding={2}>
            <CustomImage></CustomImage>
            <Calendar />
          </Grid>
          <Grid item>{/* category */}</Grid>
        </Grid>
      </Box>
    </>
  );
};

export default content;
