import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import background from '../../assets/images/background.png';
import Appbar from '../SharedComponents/Appbar';
import Footer from '../SharedComponents/Footer';
import DisplayFolders from '../ClientSide/OtherPageComponents/DisplayFolders';

const contentPage = (props) => {
  const { scholar } = useParams();
  var category = props.category;
  return (
    <>
      <Box style={styles.container}>
        <Box sx={{ flexDirection: 'column' }}>
          <Appbar />
          <DisplayFolders scholar={scholar} category={category} />
          <Footer />
        </Box>
      </Box>
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

export default contentPage;
