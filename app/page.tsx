import Image from 'next/image';

const posts = [
  {
    id: '1',
    hero: 'https://picsum.photos/300',
    title: 'Post title',
    content: 'Post body that can be longer than the title',
  },
  {
    id: '2',
    hero: 'https://picsum.photos/300',
    title: 'Post title',
    content: 'Post body that can be longer than the title',
  },
  {
    id: '3',
    hero: 'https://picsum.photos/300',
    title: 'Post title',
    content: 'Post body that can be longer than the title',
  },
];

export default function Home() {
  return (
    <main className="w-full max-w-6xl px-8">
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
        {posts.map((post) => (
          <div className="rounded shadow-lg" key={post.id}>
            <div className="w-full">
              <Image
                src={post.hero}
                width="300"
                height="300"
                alt={post.title}
                sizes="100w"
                className="w-full h-auto"
              />
            </div>
            <div className="px-4 py-2">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
