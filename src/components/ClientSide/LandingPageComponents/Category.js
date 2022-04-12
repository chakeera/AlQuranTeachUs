import { Box, Skeleton } from '@mui/material';
import './category.css';
import box1 from '../../../assets/images/200x200.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const category = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [fbLinkUrl, setFBLinkUrl] = useState('');
  const [mkLinkUrl, setMKLinkUrl] = useState('');
  const getExistedImage = async () => {
    const docRef = doc(db, 'Images', 'topContent');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setImageUrl(docSnap.data().url);
    } else {
      console.log('No such document!');
    }
  };

  const getLink = async () => {
    const mkDocRef = doc(db, 'ExternalLink', 'makkah');
    const mkDocSnap = await getDoc(mkDocRef);
    const fbDocRef = doc(db, 'ExternalLink', 'facebook');
    const fbDocSnap = await getDoc(fbDocRef);
    if (fbDocSnap.exists()) {
      setFBLinkUrl(fbDocSnap.data().link);
    } else {
      console.log('No such document!');
    }
    if (mkDocSnap.exists()) {
      setMKLinkUrl(mkDocSnap.data().link);
    } else {
      console.log('No such document!');
    }
  };

  useEffect(() => (getExistedImage(), getLink()), []);
  return (
    <>
      {/* Custom Header/Banner */}
      {imageUrl === '' ? (
        <Skeleton
          className="top-header"
          sx={{ bgcolor: 'grey', my: 5 }}
          variant="rectangular"
          width={800}
          height={200}
        />
      ) : (
        <Box sx={{ my: 5 }} className="top-header" component="img" src={imageUrl} />
      )}
      <Box className="category-container">
        <Box className="category-item">
          <a href={fbLinkUrl} target="_blank" rel="noreferrer">
            <img className="img" src={box1} />
          </a>
        </Box>
        <Box className="category-item">
          <a href={mkLinkUrl} target="_blank" rel="noreferrer">
            <img className="img" src={box1} />
          </a>
        </Box>
        <Box className="category-item">
          <Link to="/Khutbah">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/TafseerTalk">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/Facebook">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/Youtube">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/Quran">
            <img className="img" src={box1} />
          </Link>
        </Box>
        <Box className="category-item">
          <Link to="/Evidence">
            <img className="img" src={box1} />
          </Link>
        </Box>
      </Box>
    </>
  );
};
export default category;
