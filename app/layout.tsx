import Link from 'next/link';
import './globals.css';
import NewPost from '@/components/NewPost';

export const metadata = {
  title: 'PortLife',
  description: 'Life at the SCPHA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center">
        <div id="modal"></div>
        <header className="w-full max-w-6xl flex items-center justify-between py-6 px-8">
          <p className="text-2xl">PortLife</p>
          <div className="flex gap-4 items-center">
            <NewPost />
            <Link href="/#posts" className="hover:underline">
              All Posts
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
