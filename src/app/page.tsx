import DeployButton from '@/components/DeployButton';
import AuthButton from '@/components/AuthButton';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Index() {
  const cookieStore = cookies();

  return (
    <div className="flex flex-col items-center flex-1 w-full gap-20">
      <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
          <DeployButton />
          <AuthButton />
        </div>
      </nav>
      <Link href="/notes">notes</Link>
      <Link href="/notes/client">notes/client</Link>
      footer
    </div>
  );
}
