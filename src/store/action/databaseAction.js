import {
  collection,
  addDoc,
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  setDoc
} from 'firebase/firestore';

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

const addNewFile = (data) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    updateDoc(doc(firestore, data.collection, data.docId), {
      files: arrayUnion(data.newFile)
    })
      .then(() => {
        dispatch({ type: 'ADD_FILE', data: data });
      })
      .catch((error) => {
        dispatch({ type: 'ADD_FILE_ERR', error: error });
      });
  };
};

const deleteFolder = (data) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    deleteDoc(doc(firestore, data.collection, data.docId))
      .then(() => {
        dispatch({ type: 'DEL_FOLDER', data: data });
      })
      .catch((error) => {
        dispatch({ type: 'DEL_FOLDER_ERR', error: error });
      });
  };
};

const deleteFile = (data) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    updateDoc(doc(firestore, data.collection, data.docId), {
      files: arrayRemove(data.file)
    })
      .then(() => {
        dispatch({ type: 'DEL_FILE', data: data });
      })
      .catch((error) => {
        dispatch({ type: 'DEL_FILE_ERR', error: error });
      });
  };
};

const createExternalLink = (data) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firestoreRef = doc(firestore, data.collection, data.type);
    setDoc(firestoreRef, { link: data.link })
      .then(() => {
        dispatch({ type: 'CREATE_EXTERNAL_LINK', data: data });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_EXTERNAL_LINK_ERR', error: error });
      });
  };
};

export { createData, createSingleData, addNewFile, deleteFolder, deleteFile, createExternalLink };
