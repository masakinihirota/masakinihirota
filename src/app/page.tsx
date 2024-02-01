import { cookies } from 'next/headers';
import Link from 'next/link';

import AuthButton from '@/components/AuthButton';
import DeployButton from '@/components/DeployButton';

export default async function Index() {
  const cookieStore = cookies();

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <DeployButton />
          <AuthButton />
        </div>
      </nav>
      <Link href="/notes">notes</Link>
      <Link href="/notes/client">notes/client</Link>
      <Link href="/type">type</Link>
      footer
      <ul>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="#top">Top</a>
      </ul>
    </div>
  );
}
