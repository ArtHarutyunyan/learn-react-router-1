import { Suspense } from "react";
import {
  //useParams,
  Link,
  useNavigate,
  useLoaderData,
  Await,
  useAsyncValue,
  // defer,
} from "react-router-dom";
//import { useState, useEffect } from "react";

const SinglePage = () => {
  const { post, id, comments } = useLoaderData();
  console.log(post);
  console.log(id);
  console.log(comments);
  //const { id } = useParams();
  //const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });
  const Post = () => {
    const post = useAsyncValue();
    return (
      <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    );
  };

  const Comments = () => {
    const comments = useAsyncValue();
    // console.log(comments);

    return (
      <div>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <>
            <h3>{comment.email}</h3>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </>
        ))}
      </div>
    );
  };

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPost(data));
  // }, [id]);
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      {/* Bad approach, use Link */}
      <button onClick={goHome}>Go Home</button>
      <Suspense fallback={<h2>Post is loading...</h2>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
      <Suspense fallback={<h2>Comments is loading...</h2>}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>
      <Link to={`/posts/${id}/edit`}>Edit this post</Link>
    </div>
  );
};

async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

async function getCommentsByPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return res.json();
}

const postLoader = async ({ params }) => {
  const id = params.id;

  return {
    post: await getPostById(id),
    id,
    comments: getCommentsByPost(id),
  };
};

export { SinglePage, postLoader };
