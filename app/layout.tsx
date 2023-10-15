import './globals.scss';
import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import { ThemeProvider } from './context/themeContext';
import { ralewaySans, robotoSlab } from './lib/fonts';
import { ThemeProvider } from './components/Theme-provider';
import { ObserverProvider } from './context/intersectionObserver';
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
      <ObserverProvider>
        <body className={`${ralewaySans.className} overflow-x-hidden`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <div
              className={`min-h-screen w-screen bg-[white] dark:bg-[#181123] flex-col flex-container-center`}
            >
              <Navigation />
              <main className="flex-col w-full flex-container-center min-h-[85vh]">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </ObserverProvider>
    </html>
  );
}
