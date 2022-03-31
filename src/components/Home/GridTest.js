import { Box } from '@mui/material';
import './gridTest.css';
import Calendar from './CalendarTest';
import Image from '../../assets/images/customImage.png';
// import TopHeader from '../../assets/images/topheader.png';
import Category from './CategoryTest';

const gridTest = () => {
  return (
    <>
      <Box className="container">
        <Box className="item">
          <Box className="custom-image" component="img" src={Image} />
        </Box>
        <Box className="item">
          <Category />
        </Box>
        <Box className="item">
          <Calendar />
        </Box>
        {/* <Box className="item">8 mini box container</Box> */}
      </Box>
    </>
  );
};

export default gridTest;
