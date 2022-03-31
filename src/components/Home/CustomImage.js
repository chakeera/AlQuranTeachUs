import { Box } from '@mui/material';
import Image from '../../assets/images/customImage.png';
import './gridTest.css';

const customImage = () => {
  return (
    <>
      <Box className="custom-image" component="img" src={Image} />
    </>
  );
};
export default customImage;
