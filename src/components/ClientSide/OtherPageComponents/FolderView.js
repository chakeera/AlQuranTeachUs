import { Avatar, Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import theme from '../../../core/theme';
import './folderView.css';
import ArrowBack from '@mui/icons-material/ArrowBack';
import FolderIcon from '@mui/icons-material/Folder';
import { useLocation } from 'react-router-dom';
import { collection, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useEffect, useState } from 'react';
import FileView from './FileView';

const contentFolderView = (props) => {
  const [folderData, setFolderData] = useState([{ folderName: 'Loading' }]);
  const [lastDoc, setLastDoc] = useState();
  const [files, setFiles] = useState([{ name: 'Loading' }]);
  const [isFolderClick, setFolderClick] = useState(false);
  const location = useLocation();
  var returnPath = '/';
  if (location.pathname.includes('Khutbah')) {
    returnPath = '/Khutbah';
  }
  if (location.pathname.includes('Tafseer') || location.pathname.includes('Talk')) {
    returnPath = '/TafseerTalk';
  }
  if (location.pathname.includes('Facebook')) {
    returnPath = '/Facebook';
  }
  if (location.pathname.includes('Youtube')) {
    returnPath = '/Youtube';
  }

  const getData = async () => {
    const limitQuery = query(
      collection(db, props.scholar + props.category),
      orderBy('folderName', 'asc'),
      limit(12)
    );
    const snapshot = await getDocs(limitQuery);
    const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const prevDoc = snapshot.docs[snapshot.docs.length - 1];
    setLastDoc(prevDoc);
    setFolderData(data);
  };

  const fetchMore = async () => {
    const limitQuery = query(
      collection(db, props.scholar + props.category),
      orderBy('folderName', 'asc'),
      limit(12),
      startAfter(lastDoc)
    );
    const snapshot = await getDocs(limitQuery);
    const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const prevDoc = snapshot.docs[snapshot.docs.length - 1];
    setLastDoc(prevDoc);
    setFolderData((folderData) => [...folderData, ...data]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isFolderClick ? (
        <FileView files={files} setFolderClick={setFolderClick} />
      ) : (
        <Box className="folder-view-container">
          <Grid
            container
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
            direction="row"
          >
            <Grid item>
              <Button
                href={returnPath}
                sx={{
                  mx: 2,
                  mt: { xs: 2, md: 4 },
                  mb: { xs: 2, md: 0 },
                  color: theme.palette.primary.dark,
                  fontWeight: 'bolder',
                  fontSize: 18
                }}
                variant="text"
              >
                <ArrowBack></ArrowBack>กลับ
              </Button>
            </Grid>
          </Grid>
          <Box className="folder-view-grid-container">
            {folderData.map((folder, index) => (
              <Button
                key={index}
                variant="contained"
                className="folder-view-item"
                onClick={() => {
                  setFolderClick(true);
                  setFiles(folder.files);
                }}
                startIcon={
                  <Avatar sx={{ bgcolor: theme.palette.primary.dark }}>
                    <FolderIcon />
                  </Avatar>
                }
                sx={{
                  justifyContent: 'start',
                  bgcolor: 'white',
                  '&:hover': { backgroundColor: 'white' }
                }}
              >
                <Typography noWrap textOverflow="ellipsis">
                  {folder.folderName}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ px: 2, py: 2 }}>
            <Button onClick={fetchMore} variant="contained" fullWidth>
              <Typography sx={{ fontWeight: 'bold' }}> โหลดเพิ่ม... </Typography>
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default contentFolderView;
