import { Box } from '@mui/material';
import './gridTest.css';
import Calendar from './CalendarTest';
import Image from '../../assets/images/600x400.jpg';
import Category from './CategoryTest';

const gridTest = () => {
  return (
    <>
      <Box className="container">
        <Box className="left-container">
          <Box className="custom-image" component="img" src={Image} />
          <Calendar />
        </Box>
        <Box className="right-container">
          <Category />
        </Box>
        {/* <Box className="item">
          <Calendar />
        </Box> */}
        {/* <Box className="item">8 mini box container</Box> */}
      </Box>
    </>
  );
};

export default gridTest;
