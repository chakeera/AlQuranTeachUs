import { Box } from '@mui/material';
// import './gridTest.css';
import './styles/category.css';
import TopHeader from '../../assets/images/800x200.jpg';
import box1 from '../../assets/images/200x200.jpg';
import { Link } from 'react-router-dom';

const category = () => {
  return (
    <>
      {/* Custom Header/Banner */}
      <Box sx={{ my: 5 }} className="top-header" component="img" src={TopHeader} />

      <Box className="category-container">
        <Box className="category-item">
          <Link to="/Khutbah">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/">
            <img className="img" src={box1} />
          </Link>
        </Box>
      </Box>
    </>
  );
};
export default category;
