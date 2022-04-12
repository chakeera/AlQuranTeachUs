const initState = {};

const addDataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_DATA':
      console.log('created data', action.data);
      return state;
    case 'CREATE_ERR':
      console.log('created data error', action.error);
      return state;
    case 'CREATE_SINGLE_DATA':
      console.log('created single data', action.data);
      return state;
    case 'CREATE_SINGLE_ERR':
      console.log('created single data error', action.error);
      return state;
    case 'CREATE_EXTERNAL_LINK':
      console.log('created external link ', action.data);
      return state;
    case 'CREATE_EXTERNAL_LINK_ERR':
      console.log('created  external link error', action.error);
      return state;
    case 'ADD_FILE':
      console.log('add file', action.data);
      return state;
    case 'ADD_FILE_ERR':
      console.log('add file error', action.error);
      return state;
    case 'DEL_FOLDER':
      console.log('delete folder', action.data);
      return state;
    case 'DEL_FOLDER_ERR':
      console.log('delete folder error', action.error);
      return state;
    case 'DEL_FILE':
      console.log('delete file', action.data);
      return state;
    case 'DEL_FILE_ERR':
      console.log('delete file error', action.error);
      return state;
    default:
      return state;
  }
};

export default addDataReducer;
