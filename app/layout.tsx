import './globals.css';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ThemeProvider } from './context/themeContext';
import { ralewaySans, robotoSlab } from './lib/fonts';

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
      <ThemeProvider>
        <body className={ralewaySans.className}>
          <div className="min-h-screen w-screen bg-[white] flex-col flex-container-center">
            <main className="flex-col w-full flex-container-center min-h-[85vh]">
              {children}
            </main>
            <Navigation />
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
