interface FetcherProps {
  url: string;
  method: string;
  body?: {};
  json?: boolean;
}
const fetcher = async ({ url, method, body = {}, json = true }: FetcherProps) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('API Error');
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

interface NewPostProps {
  title: string;
  content: string;
  author: string;
  hero: string;
}
export const createNewPost = ({ title, content, author, hero }: NewPostProps) => {
  return fetcher({
    url: '/api/post',
    method: 'POST',
    body: { title, content, author, hero },
  });
};
