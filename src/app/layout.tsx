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
    <html lang="ja" className="dark" suppressHydrationWarning>
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// <ThemeProvider
// attribute="class"
// defaultTheme="system"
// enableSystem
// disableTransitionOnChange
// >
// <main className="flex flex-col items-center min-h-screen">
//   {children}
// </main>
// </ThemeProvider>
