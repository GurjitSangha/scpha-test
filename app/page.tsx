import Image from 'next/image';
import db from '@/lib/db';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

const truncateString = (str: string, len: number): string => {
  if (str.length <= len) return str;
  return str.slice(0, len) + '...';
};

const getData = async () => {
  const posts = await db.post.findMany({
    where: {
      published: true,
    },
  });
  return posts;
};

export default async function Home() {
  const dbPosts = await getData();
  return (
    <main className="w-full max-w-6xl px-8">
      <HeroSection />
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 mb-8" id="posts">
        {dbPosts.map((post) => (
          <Link
            href={`/post/${post.id}`}
            className="rounded shadow-lg hover:scale-105 transition-transform"
            key={post.id}
          >
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
              <p>{truncateString(post.content || '', 50)}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
