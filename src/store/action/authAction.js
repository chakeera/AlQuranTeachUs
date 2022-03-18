// export const signIn = (credentials) => {
//   // eslint-disable-next-line no-unused-vars
//   return (dispatch, getState, { getFirebase }) => {
//     const firebase = getFirebase();
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(credentials.email, credentials.password)
//       .then(() => {
//         dispatch({ type: 'SIGN_IN' });
//       })
//       .catch((error) => {
//         dispatch({ type: 'SIGN_IN_ERR', error: error });
//       });
//   };
// };
