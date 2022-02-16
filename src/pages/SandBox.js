import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import React, { useState } from 'react';
import DB from '../firebase/index';
import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import theme from '../core/theme';
import SandBox2 from '../pages/SandBox2';

const Sandbox = () => {
  const [dataFromDb, setDataFromDb] = useState([{ name: 'Loading...', id: 'initial' }]);

  useEffect(
    () =>
      onSnapshot(collection(DB, 'Folder1'), (snapshot) =>
        setDataFromDb(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div>
      <Container>
        <Typography variant="h4">Retrive Data(String, num) from DB test</Typography>
        <List sx={{ width: '100%', maxWidth: 360, background: theme.palette.primary.main }}>
          {dataFromDb.map((data) => (
            <ListItem key={data.id}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={data.name} secondary={data.link} />
            </ListItem>
          ))}
        </List>
        <SandBox2></SandBox2>
      </Container>
    </div>
  );
};

export default Sandbox;
