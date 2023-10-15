'use client';
import { links } from '../lib/data';
import { useThemeContext } from '../context/themeContext';
import { ralewaySans } from '../lib/fonts';
import { motion, useScroll } from 'framer-motion';
import { useObserverContext } from '../context/intersectionObserver';
import Theme from './ThemeSwitcher';
import { useState } from 'react';
function Navigation() {
  //framer motion spring fn
  const { scrollYProgress } = useScroll();
  const { activeSection, setShouldObserverHandleScroll } = useObserverContext();
  const [isActive, setIsActive] = useState(0);
  return (
    <>
      <nav
        className={` ${ralewaySans.className} dark:bg-[#181123] z-[99] h-[5vh] flex items-center justify-center gap-8  px-6 py-2 rounded-sm left-0 w-full fixed transition-all border-b border-b-slate-200 dark:border-black  
        }`}
      >
        <Theme />
        <ul
          className=" relative flex items-center gap-8 border-b-transparent border-b transition-all"
          id="bottom-nav "
        >
          {links.map((link, idx) => (
            <li
              onClick={() => {
                //TODO: iskljuciti interceptor ka se klikne na link *default ponasanje hyperlinka*
                //TODO: setovati active link pa ga dole proveriti ako jeste postaviti border
                setShouldObserverHandleScroll(false);
                setTimeout(() => {
                  setShouldObserverHandleScroll(true);
                }, 300);
              }}
              key={link.title}
              className={`relative transition-all border-b-transparent border-b `}
            >
              <a href={link.href}>{link.title}</a>

              {activeSection === link.title.toLowerCase() && (
                <div
                  className={`h-[1px] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all  `}
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
//blurovani kod u pozadini da malo razbije monotoniju
// implement sanity  client for blog
//blog post treba da ima sliku,reach text,title,datum
