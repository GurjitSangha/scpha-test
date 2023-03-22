import db from '@/lib/db';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import Image from 'next/image';

const getData = async (id: string) => {
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

interface Props {
  params: { id: string };
}
export default async function PostPage({ params }: Props) {
  const post = await getData(params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  const cldImage = new CloudinaryImage(post.hero, {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  }).resize(fill().width(500).height(500));

  return (
    <main className="w-full max-w-6xl flex flex-col justify-center items-center px-8">
      <section className="w-full flex flex-col sm:flex-row justify-center py-6 gap-8">
        <Image src={cldImage.toURL()} width={500} height={500} alt={post.title} />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl">{post.title}</h1>
          <p>{post.author?.name}</p>
        </div>
      </section>
      <section>{post.content}</section>
    </main>
  );
}
