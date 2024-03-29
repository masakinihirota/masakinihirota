import { Button } from '@nextui-org/button';
import { cookies } from 'next/headers';
import Link from 'next/link';

import AuthButton from '@/components/Auth/AuthButton';
import { ModeToggle } from '@/components/toggle-button';

export default async function Index() {
  const cookieStore = cookies();

  return (
    <div className="">
      <nav className="flex flex-row items-center justify-between ">
        Home
        {/* <DeployButton /> */}
        <ModeToggle />
        <Link href="/auth">OAuthLoginButton</Link>
        <AuthButton />
      </nav>
      <div>
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
      footer
    </div>
  );
}
