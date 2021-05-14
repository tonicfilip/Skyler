import axios from "axios";
import React, { useEffect } from "react";

const Posts = () => {
  /* Use Effect hook */
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = React.useState();

  const getPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setPosts(res.data);
        console.log(posts);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1 style={{ marginLeft: 40 }}>Posts</h1>
      <ul style={{ listStyle: "none" }}>
        {posts.map((post) => (
          <li key={post.id}>
            <b>title:</b> {post.title},
            <div>
              <b>body:</b> {post.body}
            </div>
            <hr />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
