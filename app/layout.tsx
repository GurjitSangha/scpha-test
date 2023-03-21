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
          <p>All Posts</p>
        </header>
        {children}
      </body>
    </html>
  );
}
