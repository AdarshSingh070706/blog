import { useState } from "react";
import Header from "./Home/Header";
import Post from "./Home/Post";

export default function HomePage() {
  const [posts] = useState([
    {
      id: 1,
      title: "Welcome to the Blog!",
      content: "Created by Adarsh",
      createdAt: new Date().toLocaleString(),
    },
  ]);

  return (
    <div >
      <Header />
      <div >
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
