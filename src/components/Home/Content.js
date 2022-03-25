import { Box, Card, CardContent, Grid } from '@mui/material';
// import CustomImage from './CustomImage';
import Calendar from './Calendar';
import Category from './Category';

const content = () => {
  return (
    <>
      <Box sx={{ background: 'rgba(190, 212, 186,0.7)', minHeight: 'auto' }}>
        <Grid container direction={{ md: 'row', sm: 'column', xs: 'column' }}>
          <Grid padding={2} container rowSpacing={2} item direction="column" xs={12} md={5}>
            <Grid item>
              <Card>
                <CardContent>Custom Image</CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Calendar />
            </Grid>
          </Grid>
          <Grid padding={2} spacing={4} direction="row" container item xs={12} md={7}>
            <Category />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default content;
