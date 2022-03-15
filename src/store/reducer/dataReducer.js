const initState = {
  reduxTestDummyCollection: [
    {
      id: '1',
      folderName: 'foldername1',
      file: [
        { id: '1', name: 'file1', link: 'link1' },
        { id: '2', name: 'file2', link: 'link2' }
      ]
    },
    {
      id: '2',
      folderName: 'foldername2foldername1foldername1',
      file: [
        { id: '1', name: 'file1', link: 'link1' },
        { id: '2', name: 'file2', link: 'link2' },
        { id: '3', name: 'file3', link: 'link3' }
      ]
    }
  ]
};
// eslint-disable-next-line no-unused-vars
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
    case 'ADD_FILE':
      console.log('add file', action.data);
      return state;
    case 'ADD_FILE_ERR':
      console.log('add file error', action.error);
      return state;
    default:
      return state;
  }
};

export default addDataReducer;
