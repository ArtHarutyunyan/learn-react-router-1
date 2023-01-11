import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Create a post {id}</h1>
      <p>This is a demo website about React-router-dom library.</p>
    </div>
  );
};

export { EditPost };
