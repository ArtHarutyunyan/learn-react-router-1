import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);
  return (
    <div>
      {post && (
        <>
          <button onClick={goBack}>Go Back</button>
          {/*Bad approach, use Link*/}
          <button onClick={goHome}>Go Home</button>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

export { SinglePage };
