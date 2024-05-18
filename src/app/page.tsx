import { getPosts } from '@/_actions/post';
import Image from 'next/image';

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello</h1>
    </main>
  );
}
