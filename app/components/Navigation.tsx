'use client';
import { links } from '../lib/data';
import { useThemeContext } from '../context/themeContext';
import { useState } from 'react';
import { robotoSlab } from '../lib/fonts';
function Navigation() {
  //when scrolled position goes fixed otherwise its relative and has no shadows
  const [activeLink, setActiveLink] = useState(links[0].title);
  const { isScrolled } = useThemeContext();
  return (
    <nav
      className={`h-[5vh] flex-container-center gap-8 bg-[#F1F1F4] px-6 py-2 rounded-lg border-4 border-white  ${
        isScrolled
          ? 'fixed top-5 shadow-md transition-all'
          : 'relative shadow-none w-fit m-auto top-0'
      }`}
    >
      {links.map((link) => (
        <a
          key={link.title}
          href={link.href}
          className={`hover:underline text-gray-700 ${
            activeLink === link.title ? 'font-black text-gray-700' : ''
          } `}
          onClick={() => setActiveLink(link.title)}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
