import { Metadata } from "next";
import Link from "next/link";

import AuthButton from "@/components/AuthButton";
import { ThemeSwitcher } from "@/components/darkmode/ThemeSwitcher";

export const metadata: Metadata = {
  title: "VNS.BLUE",
  description: "VNS.BLUE",
  keywords: "VNS.BLUE, オアシス宣言",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main data-theme="winter">
      <div className="flex flex-col h-screen">
        <div className="navbar border-b border-gray-300 py-8 px-4">
          <nav className="flex flex-row items-center justify-between ">
            <h1 className="font-semibold">
              <Link href="/">VNS.BLUE</Link>
            </h1>
            {/* Dark mode 切り替えスイッチ */}
            <ThemeSwitcher />

            <Link className="btn btn-outline no-animation" href="/account">
              Account
            </Link>

            {/* OAuth用 */}
            <Link href="/auth">OAuthLoginButton</Link>

            {/* メール用 */}
            <AuthButton />

            {/* Sign out */}
            <form className="block" action="/auth/signout" method="post">
              <button type="submit">Sign out</button>
            </form>
          </nav>
        </div>
        <div className="grid place-items-center my-20 mx-2">{children}</div>
      </div>
    </main>
  );
}
