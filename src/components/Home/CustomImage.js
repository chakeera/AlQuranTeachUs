import { Box } from '@mui/material';
import Image from '../../assets/images/customImage.png';

const customImage = () => {
  return (
    <>
      <Box
        borderRadius={{ md: '20px 0px 0px 0px' }}
        height={{ sm: '100%', md: '450px' }}
        width={'100%'}
        // width={'40vw'}
        // height={'45vh'}
        component="img"
        src={Image}
      />
    </>
  );
};
export default customImage;
