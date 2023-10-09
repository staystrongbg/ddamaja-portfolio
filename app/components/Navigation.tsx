'use client';
import { links } from '../lib/data';
import { useThemeContext } from '../context/themeContext';
import { useRef, useState } from 'react';
import { robotoSlab } from '../lib/fonts';
import { motion, useScroll } from 'framer-motion';

function Navigation() {
  //when scrolled position goes fixed otherwise its relative and has no shadows
  const [activeLink, setActiveLink] = useState(0);
  const { isScrolled } = useThemeContext();
  //ovo nE radi as expected
  const { scrollYProgress } = useScroll();
  const borderRef = useRef<HTMLDivElement>(null);
  const handleElementClick = (index: number) => {
    setActiveLink(index);
    if (borderRef.current) {
      borderRef.current.style.transform = `translateX(${index * 100}%)`;
    }
  };

  return (
    <>
      <nav
        className={` ${robotoSlab.className}  h-[5vh] flex items-center justify-center gap-8 bg-[#fff] px-6 py-2 rounded-sm left-0 w-full fixed transition-all border-b border-b-slate-200 
        }`}
      >
        <ul
          className=" relative flex items-center gap-8 border-b-transparent border-b transition-all"
          id="bottom-nav "
        >
          {links.map((link, idx) => (
            <li
              key={link.title}
              onClick={() => handleElementClick(idx)}
              className={`relative transition-all border-b-transparent border-b `}
            >
              <a href={link.href}>{link.title}</a>

              {activeLink === idx && (
                <div
                  ref={borderRef}
                  className={`h-[1px] w-full bg-black transition-all  `}
                />
              )}
            </li>
          ))}
        </ul>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      </nav>
    </>
  );
}

export default Navigation;

//logika bi bila on cick na perentu translateX bordera tj elementa  za onoliko piksela kolika je margina tj gap izmedju linkova
