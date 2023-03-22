import { CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import Image from 'next/image';
import Link from 'next/link';

const truncateString = (str: string, len: number): string => {
  if (str.length <= len) return str;
  return str.slice(0, len) + '...';
};

interface Props {
  id: string;
  title: string;
  content: string;
  hero: string;
}
export default function PostCard({ id, title, content, hero }: Props) {
  const cldImage = new CloudinaryImage(hero, {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  }).resize(fill().width(500).height(500));

  return (
    <Link href={`/post/${id}`} className="rounded shadow-lg hover:scale-105 transition-transform">
      <div className="w-full">
        <Image
          src={cldImage.toURL()}
          width="500"
          height="500"
          alt={title}
          sizes="100w"
          className="w-full h-auto"
        />
      </div>
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{truncateString(content || '', 50)}</p>
      </div>
    </Link>
  );
}
