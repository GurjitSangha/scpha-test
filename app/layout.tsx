import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'PortLife',
  description: 'Life at the SCPHA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center">
        <header className="w-full max-w-6xl flex items-center justify-between py-6 px-8">
          <p className="text-2xl">PortLife</p>
          <div className="flex gap-4">
            <a className="hover:underline">New Post</a>
            <Link href="/" className="hover:underline">
              All Posts
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
