import moment from 'moment';
import momentHijri from 'moment-hijri';
const getCurrentDate = moment().format('l');
const getCurrentHijriDate = momentHijri().format('iYYYY/iM/iD');
const currentDate = getCurrentDate.split('/');
const currentHijiriDate = getCurrentHijriDate.split('/');
const startingYear = momentHijri().iYear() - 100;
const endingYear = momentHijri().iYear() + 100;

const defaultValue = {
  year: parseInt(currentDate[2]),
  month: parseInt(currentDate[0]),
  day: parseInt(currentDate[1])
};
const hijiriValue = {
  year: parseInt(currentHijiriDate[0]),
  month: parseInt(currentHijiriDate[1]),
  day: parseInt(currentHijiriDate[2])
};

const customLocale = {
  months: [
    'Muharram',
    'Safar',
    'Rabi Al-Awwal',
    'Rabi Al-Thani',
    'Jamada Al-Awwal',
    'Jamada Al-Thani',
    'Rajab',
    "Sha'ban",
    'Ramadan',
    'Shawwal',
    'Dhul Qadah',
    'Dhul Hijjah'
  ],
  weekDays: [
    {
      name: 'Sunday', // used for accessibility
      short: 'S', // displayed at the top of days' rows
      isWeekend: true // is it a formal weekend or not?
    },
    {
      name: 'Monday',
      short: 'M'
    },
    {
      name: 'Tuesday',
      short: 'T'
    },
    {
      name: 'Wednesday',
      short: 'W'
    },
    {
      name: 'Thursday',
      short: 'T'
    },
    {
      name: 'Friday',
      short: 'F'
    },
    {
      name: 'Saturday',
      short: 'S',
      isWeekend: true
    }
  ],
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit) {
    return digit;
  }
};

export { customLocale, defaultValue, hijiriValue, startingYear, endingYear };
