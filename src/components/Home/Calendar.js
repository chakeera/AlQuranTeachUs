import { Box, Grid } from '@mui/material';
import { CalendarComponent, Inject, Islamic } from '@syncfusion/ej2-react-calendars';
import verticalHeader from '../../assets/images/calendar-header-vertical.png';
import '../../assets/styles/calendar.css';
// import horizontalHeader from '../../assets/images/calendar-header-horizontal.png';

const calendar = () => {
  return (
    <>
      <Grid container spacing={2} direction={{ md: 'row' }}>
        <Grid item>
          <Box component="img" height={{ md: '300px' }} width={'auto'} src={verticalHeader} />
        </Grid>
        <Grid item>
          <CalendarComponent id="calendar" calendarMode="Islamic">
            <Inject services={[Islamic]} />
          </CalendarComponent>
        </Grid>
        <Grid item>
          <CalendarComponent id="calendar"></CalendarComponent>
        </Grid>
      </Grid>
    </>
  );
};

export default calendar;
