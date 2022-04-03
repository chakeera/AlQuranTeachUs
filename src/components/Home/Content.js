import { Box } from '@mui/material';
import './styles/content.css';
import Calendar from './Calendar';
import Image from '../../assets/images/600x400.jpg';
import Category from './Category';

const gridTest = () => {
  return (
    <>
      <Box className="container">
        <Box className="left-container">
          {/* Custom Image */}
          <Box className="custom-image" component="img" src={Image} />
          <Calendar />
        </Box>
        <Box className="right-container">
          <Category />
        </Box>
      </Box>
    </>
  );
};

export default gridTest;
