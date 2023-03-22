import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const req = await request.json();
  if (!req.body) {
    return NextResponse.json({ data: { message: 'No data' } });
  }

  await db.post.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      hero: req.body.hero,
      authorId: req.body.author,
    },
  });

  return NextResponse.json({ data: { message: 'ok' } });
}
