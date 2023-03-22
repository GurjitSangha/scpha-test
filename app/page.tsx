import Image from 'next/image';
import db from '@/lib/db';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import PostCard from '@/components/PostCard';

const getData = async () => {
  const posts = await db.post.findMany({
    where: {
      published: true,
    },
    orderBy: { createdAt: 'desc' },
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
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content || ''}
            hero={post.hero}
          />
        ))}
      </section>
    </main>
  );
}
