import { useParams } from 'react-router-dom';

const displayFolders = (props) => {
  let { scholar } = useParams();
  let { category } = props;
  return (
    <div>
      <h3>Scholar: {scholar}</h3>
      <h3>Category: {category}</h3>
      <h3>DB: {scholar + category}</h3>
    </div>
  );
};
export default displayFolders;
