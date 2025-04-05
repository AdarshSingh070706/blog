import { useState } from "react";

export default function HomePage() {
  const [posts] = useState([
    {
      id: 1,
      title: "Welcome to the Blog!",
      content: "This is a sample blog post to get you started.",
      createdAt: new Date().toLocaleString(),
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">📝 React Blog Home</h1>
      <p className="text-center text-gray-600 mb-6">
        Explore thoughts, tutorials, and ideas from our blog community.
      </p>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-xl p-4 shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.createdAt}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
