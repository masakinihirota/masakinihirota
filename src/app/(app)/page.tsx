export default async function Home() {
  return;
}
import { createServerClient } from "@/lib/supabase-server";
import { Button } from "@nextui-org/button";
import { cookies } from "next/headers";
import Link from "next/link";

import AuthButton from "@/components/Auth/AuthButton";
import { ThemeSwitcher } from "@/components/darkmode/ThemeSwitcher";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="">
      <nav className="flex flex-row items-center justify-between ">
        Home
        {/* Dark mode 切り替えスイッチ */}
        <ThemeSwitcher />
        {/* OAuth用 */}
        <Link href="/auth">OAuthLoginButton</Link>
        {/* メール用 */}
        <AuthButton />
        {/* Sign out */}
        <form className="block" action="/auth/signout" method="post">
          <button type="submit">Sign out</button>
        </form>
      </nav>
      <h1>Welcome {session?.user?.email}</h1>
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
