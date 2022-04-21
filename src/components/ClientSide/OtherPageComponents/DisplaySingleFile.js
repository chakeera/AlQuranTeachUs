import { ArrowBack } from '@mui/icons-material';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import Appbar from '../../../components/SharedComponents/Appbar';
import Footer from '../../../components/SharedComponents/Footer';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Box } from '@mui/system';
import theme from '../../../core/theme';
import './folderView.css';
import '../../../pages/pages.css';
import { collection, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';

const displaySingleFile = (props) => {
  const [folderData, setFolderData] = useState([{ fileName: 'Loading' }]);
  const [lastDoc, setLastDoc] = useState();
  const getData = async () => {
    const limitQuery = query(collection(db, props.category), orderBy('fileName', 'asc'), limit(3));
    const snapshot = await getDocs(limitQuery);
    const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setFolderData(data);
  };

  const fetchMore = async () => {
    const limitQuery = query(
      collection(db, props.scholar + props.category),
      limit(12),
      orderBy('fileName', 'asc'),
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
      <Box className="outer-container">
        <Box sx={{ flexDirection: 'column' }}>
          <Appbar />
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
                  href="/"
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
                  <ArrowBack></ArrowBack>กลับหน้าหลัก
                </Button>
              </Grid>
            </Grid>
            <Box className="folder-view-grid-container">
              {folderData.map((folder, index) => (
                <Button
                  key={index}
                  variant="contained"
                  className="folder-view-item"
                  href={folder.link}
                  startIcon={
                    <Avatar sx={{ bgcolor: theme.palette.primary.dark }}>
                      <InsertDriveFileIcon />
                    </Avatar>
                  }
                  sx={{
                    justifyContent: 'start',
                    bgcolor: 'white',
                    '&:hover': { backgroundColor: 'white' }
                  }}
                >
                  <Typography noWrap textOverflow="ellipsis">
                    {folder.fileName}
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

          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default displaySingleFile;
