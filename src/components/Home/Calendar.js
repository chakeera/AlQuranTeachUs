import { Box, Grid } from '@mui/material';
import { CalendarComponent, Inject, Islamic } from '@syncfusion/ej2-react-calendars';
// import verticalHeader from '../../assets/images/calendar-header-vertical.png';
import '../../assets/styles/calendar.css';
import horizontalHeader from '../../assets/images/calendar-header-horizontal.png';

const calendar = () => {
  return (
    <>
      <Grid container spacing={1} alignItems={'center'} direction={{ md: 'row' }}>
        <Grid item flexDirection={{ xs: 'row', md: 'column' }}>
          <Box
            // flexDirection={{ xs: 'row', md: 'column' }}
            component="img"
            // display={{ xs: 'flex', sm: 'flex', md: 'flex', xl: 'flex' }}
            // height={{ xs: '20vw', sm: '20vw', md: '40vh' }}
            src={horizontalHeader}
          />
          {/* <Box
            component="img"
            display={{ xs: 'none', sm: 'none', md: 'flex', xl: 'flex' }}
            height={{ md: '40vh', xl: '40vh' }}
            src={verticalHeader}
          /> */}
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
