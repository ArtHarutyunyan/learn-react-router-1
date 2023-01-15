import { redirect, useNavigate, useNavigation } from "react-router-dom";
import NewPost from "../components/NewPost";
import { useAuth } from "../hooc/useAuth";

const CreatePost = () => {
  const { singOut } = useAuth();
  const navigate = useNavigate();
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <div>
      <h1>Create a post</h1>
      <NewPost submitting={navigation.state === "submitting"} />
      <button onClick={() => singOut(() => navigate("/", { replace: true }))}>
        Log Out
      </button>
    </div>
  );
};

const createPost = async ({ title, body, userId }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, userId }),
  });
  const newPost = await res.json();

  return newPost;
};

const createPostAction = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData, "formData");
  const newPost = {
    title: formData.get("title"),
    body: formData.get("body"),
    userId: formData.get("userId"),
  };
  const post = await createPost(newPost);

  return redirect("/posts/" + post.id);
};

export { CreatePost, createPostAction };