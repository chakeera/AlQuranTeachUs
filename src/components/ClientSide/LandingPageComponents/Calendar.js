import { Box } from '@mui/material';
import verticalHeader from '../../../assets/images/calendar-header-vertical.png';
import horizontalHeader from '../../../assets/images/calendar-header-horizontal.png';
import './calendar.css';
import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css';
import { Calendar } from '@amir04lm26/react-modern-calendar-date-picker';
import {
  customLocale,
  defaultValue,
  endingYear,
  hijiriValue,
  startingYear
} from './hijrah-calendar-locale';

const calendar = () => {
  return (
    <>
      <Box className="calendar-container">
        <Box className="calendar-header-vertical" component="img" src={verticalHeader} />
        <Box className="calendar-header-horizontal" component="img" src={horizontalHeader} />
        <Calendar
          calendarClassName="responsive-calendar"
          value={hijiriValue}
          locale={customLocale}
          selectorStartingYear={startingYear}
          selectorEndingYear={endingYear}
          shouldHighlightWeekends
        />
        <Calendar
          value={defaultValue}
          shouldHighlightWeekends
          calendarClassName="responsive-calendar"
        />
      </Box>
    </>
  );
};
export default calendar;
