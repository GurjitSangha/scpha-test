const posts = [
  {
    id: '1',
    title: 'Post title',
    content: 'Post body that can be longer than the title',
  },
  {
    id: '2',
    title: 'Post title',
    content: 'Post body that can be longer than the title',
  },
  {
    id: '3',
    title: 'Post title',
    content: 'Post body that can be longer than the title',
  },
];

export default function Home() {
  return (
    <main className="w-full px-8">
      <section className="grid grid-cols-2 w-full">
        {posts.map((post) => (
          <div className="rounded shadow-lg" key={post.id}>
            <div className="px-4 py-2">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
