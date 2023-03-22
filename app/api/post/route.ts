import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  if (!data) {
    return NextResponse.json({ error: true, data: { message: 'No data' } });
  }

  const post = await db.post.create({
    data: {
      title: data.title,
      content: data.content,
      hero: data.hero,
      authorId: '5ca890cd-d283-4c8d-ad20-2392acd853c5',
      published: true,
    },
  });

  if (!post) {
    return NextResponse.json({ error: true, data: { message: 'Unable to create post' } });
  }
  return NextResponse.json({ error: false, data: { message: 'ok' } });
}
