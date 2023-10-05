import './globals.css';
import type { Metadata } from 'next';
import { Share_Tech_Mono } from 'next/font/google';

const shareTechMono = Share_Tech_Mono({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Zoran - Javascript Developer',
  description: 'My Portfolio Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={shareTechMono.className}>{children}</body>
    </html>
  );
}
