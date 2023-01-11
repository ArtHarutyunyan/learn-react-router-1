import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooc/useAuth";

const CreatePost = () => {
  const { singOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create a post</h1>
      <button onClick={() => singOut(() => navigate("/", { replace: true }))}>
        Log Out
      </button>
    </div>
  );
};

export { CreatePost };
