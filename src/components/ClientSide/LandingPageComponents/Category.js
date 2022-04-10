import { Box, Skeleton } from '@mui/material';
// import './gridTest.css';
import './category.css';
// import TopHeader from '../../assets/images/800x200.jpg';
import box1 from '../../../assets/images/200x200.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const category = () => {
  const [url, setUrl] = useState('');
  // const [filepath, setFilepath] = useState('');

  const getExistedImage = async () => {
    const docRef = doc(db, 'Images', 'topContent');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUrl(docSnap.data().url);
      // setFilepath(docSnap.data().filepath);
    } else {
      console.log('No such document!');
    }
  };

  useEffect(() => getExistedImage(), []);
  return (
    <>
      {/* Custom Header/Banner */}
      {url === '' ? (
        <Skeleton
          className="top-header"
          sx={{ bgcolor: 'grey', my: 5 }}
          variant="rectangular"
          width={800}
          height={200}
        />
      ) : (
        <Box sx={{ my: 5 }} className="top-header" component="img" src={url} />
      )}
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
