import { Box, Skeleton, Typography } from '@mui/material';
import './category.css';
import Youtube from '../../../assets/images/youtube.png';
import Talk from '../../../assets/images/talk.png';
import Quran from '../../../assets/images/quran.png';
import Khutbah from '../../../assets/images/khutbah.png';
import FacebookLive from '../../../assets/images/facebooklive.png';
import MakkahLive from '../../../assets/images/makkahlive.png';
import Facebook from '../../../assets/images/facebook.png';
import Doc from '../../../assets/images/doc.png';
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
            <img className="img" src={FacebookLive} />
          </a>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '3vw', sm: '1vw', md: '1vw' },
              fontWeight: 'bold'
            }}
          >
            คุตบะห์วันศุกร์-บรรยาย Live สด
          </Typography>
        </Box>
        <Box className="category-item">
          <a href={mkLinkUrl} target="_blank" rel="noreferrer">
            <img className="img" src={MakkahLive} />
          </a>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '3vw', sm: '1vw', md: '1vw' },
              fontWeight: 'bold'
            }}
          >
            Makkah Live สด
          </Typography>
        </Box>
        <Box className="category-item">
          <Link to="/Khutbah">
            <img className="img" src={Khutbah} />
          </Link>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '3vw', sm: '1vw', md: '1vw' },
              fontWeight: 'bold'
            }}
          >
            คุตบะห์วันศุกร์ตัฟซีร
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '3vw', sm: '1vw', md: '1vw' },
              fontWeight: 'bold'
            }}
          >
            อัลกุรอาน
          </Typography>
        </Box>
        <Box className="category-item">
          <Link to="/TafseerTalk">
            <img className="img" src={Talk} />
          </Link>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '3vw', sm: '1vw', md: '1vw' },
              fontWeight: 'bold'
            }}
          >
            บรรยาย-ตัฟซีรอัลกุรอาน
          </Typography>
        </Box>
        <Box className="category-item">
          <Link to="/Facebook">
            <img className="img" src={Facebook} />
          </Link>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '3vw', sm: '1vw', md: '1vw' },
              fontWeight: 'bold'
            }}
          >
            Facebook ตัฟซีรอัลกุรอาน
          </Typography>
        </Box>
        <Box className="category-item">
          <Link to="/Youtube">
            <img className="img" src={Youtube} />
          </Link>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '3vw', sm: '1vw', md: '1vw' },
              fontWeight: 'bold'
            }}
          >
            YouTube ตัฟซีรอัลกุรอาน
          </Typography>
        </Box>
        <Box className="category-item">
          <Link to="/Quran">
            <img className="img" src={Quran} />
          </Link>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '3vw', sm: '1vw', md: '1vw' },
              fontWeight: 'bold'
            }}
          >
            อัลกุรอานเพราะๆ
          </Typography>
        </Box>
        <Box className="category-item">
          <Link to="/Evidence">
            <img className="img" src={Doc} />
          </Link>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { xs: '3vw', sm: '1vw', md: '1vw' },
              fontWeight: 'bold'
            }}
          >
            เอกสารและหลักฐานอื่นๆ
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default category;
