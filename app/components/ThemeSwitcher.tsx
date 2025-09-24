"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //hydration error fix
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[50px] h-7 rounded-full bg-transparent fixed top-3 right-3 z-99" />
    );
  }
  return (
    <div
      className="w-[50px] h-7 rounded-full bg-gray-50 fixed top-3 right-3 z-99 flex items-center justify-around border border-purple-100 cursor-pointer shadow-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <button
        className={`w-6 h-6 rounded-full bg-[#53B1C7] transition-all absolute flex items-center justify-between z-99 ${
          theme === "dark" ? "left-6" : "left-0"
        } `}
      ></button>
      <span className="">🔆</span>
      <span className="">🌙</span>
    </div>
  );
};
export default ThemeSwitcher;
