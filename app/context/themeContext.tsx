'use client';
import { useContext, createContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isDark: boolean;
  toggleMode: () => void;
  isScrolled: boolean;
  handleScroll: () => void;
  isActive: number;
  setIsActive: (value: number) => void;
};
const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleMode: () => {},
  isScrolled: false,
  handleScroll: () => {},
  isActive: 1,
  setIsActive: (value: number) => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const [isActive, setIsActive] = useState(1);

  const toggleMode = () => {
    setIsDark(!isDark);
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
        isActive,
        setIsActive,
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
