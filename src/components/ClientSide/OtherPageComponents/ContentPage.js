import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import Appbar from '../../SharedComponents/Appbar';
import Footer from '../../SharedComponents/Footer';
import FolderView from './FolderView';
import '../../../pages/pages.css';

const contentPage = (props) => {
  const { scholar } = useParams();
  var category = props.category;
  return (
    <>
      <Box className="outer-container">
        <Box sx={{ flexDirection: 'column' }}>
          <Appbar />
          <FolderView scholar={scholar} category={category} />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default contentPage;
