import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import Appbar from '../../SharedComponents/Appbar';
import Footer from '../../SharedComponents/Footer';
import DisplayFolders from './DisplayFolders';
import '../../../pages/pages.css';

const contentPage = (props) => {
  const { scholar } = useParams();
  var category = props.category;
  return (
    <>
      <Box className="outer-container">
        <Box sx={{ flexDirection: 'column' }}>
          <Appbar />
          <DisplayFolders scholar={scholar} category={category} />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default contentPage;
