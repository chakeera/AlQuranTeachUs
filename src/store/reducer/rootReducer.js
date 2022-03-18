import authReducer from './authReducer';
import dataReducer from './dataReducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootreducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootreducer;
