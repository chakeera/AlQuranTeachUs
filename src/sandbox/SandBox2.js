import { Typography } from '@mui/material';
// import FolderIcon from '@mui/icons-material/Folder';
import React, { useEffect } from 'react';
import DB from '../firebase/index';
// import { collection } from 'firebase/firestore';
// import theme from '../core/theme';
// import SandBox2 from '../pages/SandBox2';

const Sandbox = () => {
  // const [dataFromDb, setDataFromDb] = useState([{ name: 'Loading...', id: 'initial' }]);
  // const [allDoc] = useState([]);
  // const [singleDoc, fetchSingleDoc] = useState({});

  useEffect(
    () =>
      DB.collection('Hanafee')
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            // fetchAllDoc((prev) => {
            //   return [...prev, doc.data()];
            // });
          });
        }),
    []
  );
  // console.log(allDoc);

  // useEffect(
  //   () =>
  //     onSnapshot(collection(DB, 'Hanafee'), (snapshot) =>
  //       setDataFromDb(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //     ),
  //   []
  // );
  return (
    <div>
      <Typography variant="h4">Retrive Nested from DB test</Typography>
      {/* <List sx={{ width: '100%', maxWidth: 360, background: theme.palette.primary.main }}>
          {dataFromDb.map((data) => (
            <ListItem key={data.id}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={data.id} secondary={data.name} />
            </ListItem>
          ))}
        </List>
        <SandBox2></SandBox2> */}
    </div>
  );
};

export default Sandbox;
