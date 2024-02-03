import '@/styles/globals.css';
// import { ThemeProvider } from '@/components/theme-provider';
import { Providers } from './providers';

import type { Metadata } from 'next';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'VNS.BLUE',
  description: 'VNS.BLUE',
  keywords: 'VNS.BLUE, オアシス宣言',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // デフォルト ダークモード
    <html lang="ja" className="dark">
      <body className="" suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
