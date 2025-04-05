export default function Post({ title, content, createdAt }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-2">{createdAt}</p>
      <p>{content}</p>
    </div>
  );
}