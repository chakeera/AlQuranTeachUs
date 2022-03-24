import { Box } from '@mui/material';
import Image from '../../assets/images/customImage.png';

const customImage = () => {
  return (
    <>
      <Box
        borderRadius={'20px 0px 0px 0px'}
        height={'auto'}
        width={{ xs: '100px', md: '450px' }}
        component="img"
        src={Image}
      />
    </>
  );
};
export default customImage;
