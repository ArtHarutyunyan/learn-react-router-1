//import { useState, useEffect } from "react";
import { Suspense } from "react";
import {
  Await,
  defer,
  json,
  Link,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { BlogFilter } from "../components/BlogFilter";

const BlogPage = () => {
  const { posts } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";

  const latest = searchParams.has("latest");
  const startsFrom = latest ? 80 : 1;

  return (
    <div>
      <h1>Blog News</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to="/posts/new">Add new post</Link>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={posts}>
          {(resolvedPosts) =>
            resolvedPosts
              .filter(
                (post) =>
                  post.title.includes(postQuery) && post.id >= startsFrom
              )
              .map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                  <li>{post.title}</li>
                </Link>
              ))
          }
        </Await>
      </Suspense>
    </div>
  );
};

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // if (!res.ok) {
  //   throw new Response("", { status: res.status, statusText: "Not found!!!" });
  // }
  return res.json();
}

const blogLoader = async ({ request, params }) => {
  const posts = getPosts();

  console.log(JSON.stringify(posts), "posts");

  if (!posts) {
    throw json(
      { message: "Not found!!!", reason: "Wrong url" },
      { status: 404 }
    );
  }
  return {
    posts,
  };
  // return defer({
  //   posts: getPosts(),
  // });
};

export { BlogPage, blogLoader };
