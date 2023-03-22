import db from '@/lib/db';
import Image from 'next/image';

const getData = async (id) => {
  const post = await db.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
    },
  });
  return post;
};

export default async function PostPage({ params }) {
  const post = await getData(params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="w-full max-w-6xl flex flex-col justify-center items-center px-8">
      <section className="w-full flex justify-center py-6 gap-8">
        <Image src={post.hero} width={300} height={300} alt={post.title} />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl">{post.title}</h1>
          <p>{post.author?.name}</p>
        </div>
      </section>
      <section>{post.content}</section>
    </main>
  );
}
