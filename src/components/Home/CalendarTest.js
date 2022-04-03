import { Box } from '@mui/material';
import verticalHeader from '../../assets/images/calendar-header-vertical.png';
import horizontalHeader from '../../assets/images/calendar-header-horizontal.png';
import './gridTest.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import {
  customLocale,
  defaultValue,
  endingYear,
  hijiriValue,
  startingYear
} from './utils/hijrah-calendar-locale';

const calendar = () => {
  // const getCurrentDate = moment().format('l');
  // const getCurrentHijriDate = momentHijri().format('iYYYY/iM/iD');
  // const currentDate = getCurrentDate.split('/');
  // const currentHijiriDate = getCurrentHijriDate.split('/');

  // const defaultValue = {
  //   year: parseInt(currentDate[2]),
  //   month: parseInt(currentDate[0]),
  //   day: parseInt(currentDate[1])
  // };
  // const hijiriValue = {
  //   year: parseInt(currentHijiriDate[0]),
  //   month: parseInt(currentHijiriDate[1]),
  //   day: parseInt(currentHijiriDate[2])
  // };

  return (
    <>
      <Box className="calendar-container">
        <Box className="calendar-header-vertical" component="img" src={verticalHeader} />
        <Box className="calendar-header-horizontal" component="img" src={horizontalHeader} />
        {/* <Box className="calendar"> */}
        <Calendar
          calendarClassName="responsive-calendar"
          value={hijiriValue}
          locale={customLocale}
          selectorStartingYear={startingYear}
          selectorEndingYear={endingYear}
          shouldHighlightWeekends
        />
        {/* </Box> */}
        {/* <Box className="calendar"> */}
        <Calendar
          value={defaultValue}
          shouldHighlightWeekends
          calendarClassName="responsive-calendar"
        />
        {/* </Box> */}
        {/* <Box className="calendar">
          <Calendar className="custom-calendar" calendar={arabic} locale={arabic_en} />
        </Box>
        <Box className="calendar">
          <Calendar calendar={gregorian} locale={english} /> */}
        {/* <DatePicker calendar="hijri" startDate={startDate} locale={locale} inline />
          <CalendarComponent
            dayHeaderFormat="Narrow"
            showTodayButton={false}
            id="calendar"
            calendarMode="Islamic"
          >
            <Inject services={[Islamic]} />
          </CalendarComponent>
        </Box>
        <Box className="calendar">
          <CalendarComponent
            dayHeaderFormat="Narrow"
            showTodayButton={false}
            id="calendar"
          ></CalendarComponent> */}
        {/* </Box> */}
      </Box>
    </>
  );
};
export default calendar;
