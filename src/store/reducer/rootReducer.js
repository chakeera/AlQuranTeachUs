import authReducer from './authReducer';
import dataReducer from './dataReducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';

const rootreducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  firestore: firestoreReducer
});

export default rootreducer;
