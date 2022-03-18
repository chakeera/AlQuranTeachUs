import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import fbConfig from './firebase/index';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducer/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig, firebase)
  )
);

const rrfConfig = {};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
