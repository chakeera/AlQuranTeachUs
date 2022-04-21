import { Box, Button, CircularProgress, Toolbar, Typography } from '@mui/material';
import { getDownloadURL, ref, uploadBytesResumable, deleteObject } from 'firebase/storage';
import { useEffect, useState } from 'react';
import theme from '../../core/theme';
import { db, storage } from '../../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const addCustomImage = (props) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');
  const [filepath, setFilepath] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const getExistedImage = async () => {
    const docRef = doc(db, 'Images', props.photoType);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUrl(docSnap.data().url);
      setFilepath(docSnap.data().filepath);
    } else {
      console.log('No such document!');
    }
  };
  const formHandler = (e) => {
    e.preventDefault();
    setUploading(true);
    const file = e.target[0].files[0];
    uploadFile(file);
  };

  const deleteImage = () => {
    if (url === '') return;
    setLoading(true);
    const desertRef = ref(storage, filepath);
    deleteObject(desertRef)
      .then(() => {
        const firestoreRef = doc(db, 'Images', props.photoType);
        setDoc(firestoreRef, { url: '', filepath: '' });
        setUrl('');
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  const uploadFile = (file) => {
    if (!file) return;
    const path = `images/${file.name}`;
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => console.log(error),
      () =>
        getDownloadURL(uploadTask.snapshot.ref).then(
          (urlSnapshot) => (
            setUrl(urlSnapshot), setFilepath(path), addUrlToFirestore(urlSnapshot, file)
          )
        )
    );
  };

  const addUrlToFirestore = (url, file) => {
    const firestoreRef = doc(db, 'Images', props.photoType);
    setDoc(firestoreRef, { url: url, filepath: `images/${file.name}` });
    setUploading(false);
  };

  useEffect(() => getExistedImage(), []);
  return (
    <>
      <Box textAlign="center" display="flex" sx={{ backgroundColor: theme.palette.secondary.main }}>
        <Box mx="auto">
          <Toolbar />
          {props.photoType === 'customImage' ? (
            <Box>
              <Typography sx={{ my: 4 }}>รูปภาพ 1</Typography>
              <Typography sx={{ fontWeight: 'bold', my: 4 }}>
                จำกัดขนาดภาพ กว้าง 600 px สูง 400px
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography sx={{ my: 4 }}>รูปภาพ 2</Typography>
              <Typography sx={{ fontWeight: 'bold', my: 4 }}>
                จำกัดขนาดภาพ กว้าง 800 px สูง 200px
              </Typography>
            </Box>
          )}
          <Typography></Typography>
          <form onSubmit={formHandler}>
            <input type="file" className="input"></input>
            <Button type="submit" variant="contained">
              {uploading && <CircularProgress sx={{ mr: 2, color: 'black' }} size={20} />}
              Upload
            </Button>
            <Button
              sx={{
                mx: 2,
                backgroundColor: 'red',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: 'red' }
              }}
              variant="contained"
              onClick={deleteImage}
            >
              {loading && <CircularProgress sx={{ mr: 2, color: 'white' }} size={20} />}
              Delete Existed Image
            </Button>
          </form>
          <Typography sx={{ my: 4 }} size={20}>
            {progress} %
          </Typography>
          {url !== '' ? <Box my={4} component="img" src={url} /> : null}
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default addCustomImage;
