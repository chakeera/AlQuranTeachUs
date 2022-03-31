import { Box } from '@mui/material';
import { CalendarComponent, Inject, Islamic } from '@syncfusion/ej2-react-calendars';
import verticalHeader from '../../assets/images/calendar-header-vertical.png';
import './styles/calendar.css';
import './gridTest.css';

import horizontalHeader from '../../assets/images/calendar-header-horizontal.png';

const calendar = () => {
  return (
    <>
      <Box className="calendar-container">
        <Box className="calendar-header-vertical" component="img" src={verticalHeader} />
        <Box className="calendar-header-horizontal" component="img" src={horizontalHeader} />
        <Box className="calendar">
          <CalendarComponent id="calendar" calendarMode="Islamic">
            <Inject services={[Islamic]} />
          </CalendarComponent>
        </Box>
        <Box className="calendar">
          <CalendarComponent id="calendar"></CalendarComponent>
        </Box>
      </Box>
    </>
  );
};
export default calendar;
