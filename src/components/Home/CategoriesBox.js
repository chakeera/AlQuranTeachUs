import { Box, Stack, Divider, Grid, Card, CardMedia, Typography, Button } from '@mui/material';
import { CalendarComponent, Inject, Islamic } from '@syncfusion/ej2-react-calendars';
import '../../style/calendar.css';
import header from '../../assets/images/header.png';
import categoryData from '../DataUtils/CategoryData';

const CategoriesBox = () => {
  return (
    <div>
      <Stack
        sx={{ ml: 2 }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 2, md: 2 }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          {categoryData.map((data) => (
            <Grid key={data.title} item xs={12} md={4}>
              <Button sx={{ mb: 1, mt: 2 }} href={data.link}>
                <Card>
                  <CardMedia component="img" image={data.image} alt={data.title} />
                </Card>
              </Button>
              <Typography align="center">{data.title}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
            <Grid item>
              <Card sx={{ mx: 1, my: 1, maxWidth: 350 }}>
                <CardMedia component="img" image={header} alt="header" />
              </Card>
            </Grid>
            <Grid item>
              <Box sx={{ my: 1 }}>
                <CalendarComponent id="calendar" calendarMode="Islamic">
                  <Inject services={[Islamic]} />
                </CalendarComponent>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <CalendarComponent id="calendar"></CalendarComponent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default CategoriesBox;
