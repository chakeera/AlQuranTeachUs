import { Box, Grid } from '@mui/material';
import CustomImage from './CustomImage';
import Calendar from './Calendar';
import Category from './Category';

const content = () => {
  return (
    <>
      <Box sx={{ background: 'rgba(190, 212, 186,0.7)', minHeight: 'auto' }}>
        <Grid container direction={{ md: 'row', sm: 'column', xs: 'column' }}>
          <Grid
            padding={1}
            alignItems={'center'}
            container
            rowSpacing={2}
            item
            // direction="column"
            // columns={2}
            // rows={2}
            xs={12}
            md={5}
          >
            <Grid item sx={{ width: '100%' }}>
              {/* <Card>
                <CardContent>Custom Image</CardContent>
              </Card> */}
              <CustomImage />
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
