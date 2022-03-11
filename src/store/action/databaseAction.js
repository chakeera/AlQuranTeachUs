import { collection, addDoc } from 'firebase/firestore';

const createData = (data) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    addDoc(collection(firestore, data.collection), {
      folderName: data.folderName,
      files: data.files
    })
      .then(() => {
        dispatch({ type: 'CREATE_DATA', data: data });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_ERR', error: error });
      });
  };
};

const createSingleData = (data) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    addDoc(collection(firestore, data.collection), {
      fileName: data.fileName,
      link: data.link
    })
      .then(() => {
        dispatch({ type: 'CREATE_SINGLE_DATA', data: data });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_SINGLE_ERR', error: error });
      });
  };
};

export { createData, createSingleData };
