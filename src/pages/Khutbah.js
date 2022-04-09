import { Box } from '@mui/material';
import SelectScholarContent from '../components/ContentPage/SelectScholarContent';
import background from '../assets/images/background.png';
import Appbar from '../components/Home/Appbar';
import Footer from '../components/Home/Footer';

const khutbah = () => {
  return (
    <>
      <Box style={styles.container}>
        <Box sx={{ flexDirection: 'column' }}>
          <Appbar />
          <SelectScholarContent category="Khutbah" />
        </Box>
        <Footer />
      </Box>
      {/* </Box> */}
    </>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minWidth: '100vw',
    minHeight: '100vh',
    width: '100%',
    height: '100%',
    backgroundAttachment: 'fixed'
  }
};
export default khutbah;
