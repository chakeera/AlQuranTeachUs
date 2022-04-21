// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5QGuvICMsXzRm7zTiUWwUWHjXB0ubRok',
  authDomain: 'alquranteachus-c9f15.firebaseapp.com',
  projectId: 'alquranteachus-c9f15',
  storageBucket: 'alquranteachus-c9f15.appspot.com',
  messagingSenderId: '982389078535',
  appId: '1:982389078535:web:d228872567a23dfdb688a2',
  measurementId: 'G-PWXST2LH6P'
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
