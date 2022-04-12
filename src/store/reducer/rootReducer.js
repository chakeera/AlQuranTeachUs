import dataReducer from './dataReducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';

const rootreducer = combineReducers({
  data: dataReducer,
  firestore: firestoreReducer
});

export default rootreducer;
