import { Box, Skeleton } from '@mui/material';
import './content.css';
import Calendar from './Calendar';
// import Image from '../../assets/images/600x400.jpg';
import Category from './Category';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const gridTest = () => {
  const [url, setUrl] = useState('');
  // const [filepath, setFilepath] = useState('');

  const getExistedImage = async () => {
    const docRef = doc(db, 'Images', 'customImage');
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
      <Box className="container">
        <Box className="left-container">
          {/* Custom Image */}
          {url === '' ? (
            <Skeleton
              className="custom-image"
              sx={{ bgcolor: 'grey' }}
              variant="rectangular"
              width={550}
              height={400}
            />
          ) : (
            <Box className="custom-image" component="img" src={url} />
          )}
          <Calendar />
        </Box>
        <Box className="right-container">
          <Category />
        </Box>
      </Box>
    </>
  );
};

export default gridTest;
