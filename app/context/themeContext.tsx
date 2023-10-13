'use client';
import { useContext, createContext, useState, useEffect } from 'react';
type Mode = 'light' | 'dark';
type ThemeContextType = {
  isDark: Mode;
  toggleMode: () => void;
  isScrolled: boolean;
  handleScroll: () => void;
};
const ThemeContext = createContext<ThemeContextType>({
  isDark: 'dark',
  toggleMode: () => {},
  isScrolled: false,
  handleScroll: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<Mode>('dark');

  const toggleMode = () => {
    setIsDark((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleMode,
        isScrolled,
        handleScroll,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
export { ThemeContext, ThemeProvider };
