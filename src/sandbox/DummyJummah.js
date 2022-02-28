import { Collapse, Container, Typography } from '@mui/material';
import { Avatar, List, ListItemButton, ListItemAvatar, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
// import { collection } from 'firebase/firestore';
import DB from '../firebase/index';
import 'firebase/firestore';
import { useState } from 'react';
import theme from '../core/theme';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Jummah = () => {
  const [expand, setExpand] = useState(true);
  const [folders, setFolders] = useState([{}]);
  //   const [files, setFiles] = useState({});
  //   const [selectedIndex, setSelectedIndex] = useState();
  //   const handleListItemClick = (event, index) => {
  //     setSelectedFolderIndex(index);
  //   };
  const handleClick = () => {
    setExpand(!expand);
  };

  // function getAllFolders(collection_name) {
  //   let folders = [];
  //   getDocs(collection(DB, collection_name)).then((snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       folders.push({ ...doc.data(), id: doc.id });
  //     });
  //     // console.log(folders);
  //     folders.map((data) => console.log(data));
  //   });
  //   return folders;
  // }

  // function getFolder() {
  //   let folders = getAllFolders('Hanafee');
  //   folders.map((data, index) => console.log(data.id));
  //   return folders;
  // }

  useEffect(() => {
    getDocs(collection(DB, 'Hanafee')).then((snapshot) => {
      let folder = [];
      snapshot.docs.forEach((doc) => {
        folder.push({ ...doc.data(), id: doc.id });
      });
      console.log(folder);
      setFolders(folder);
    });
  }, []);

  folders.map((data) => console.log(data));

  // Now i have to get Object.keys(data) to loop and create the nested list

  return (
    <div>
      {/* <Appbar> */}
      <Container>
        <Typography variant="h3"> Hanafee</Typography>
        <List sx={{ width: '100%', maxWidth: 360, background: theme.palette.primary.main }}>
          {folders.map((data) => (
            <>
              <ListItemButton key={data.id} onClick={handleClick}>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data.id} />
                {expand ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={expand} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton key={data.id} sx={{ pl: 4 }}>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          ))}
        </List>
      </Container>
      {/* </Appbar> */}
    </div>
  );
};
export default Jummah;
