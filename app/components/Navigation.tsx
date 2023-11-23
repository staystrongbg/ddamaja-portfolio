'use client';

import { links } from '../lib/data';
import { ralewaySans } from '../lib/fonts';
import { motion, useScroll } from 'framer-motion';
import { useObserverContext } from '../context/intersectionObserver';
import Theme from './ThemeSwitcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function Navigation() {
  //framer motion spring fn
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  const { activeSection, setActiveSection } = useObserverContext();

  if (path === '/blog') {
    setActiveSection('blog');
  }

  return (
    <>
      <nav
        className={` ${ralewaySans.className} dark:bg-[#181123] bg-[#FFFFFF] z-[99] h-[5vh] flex items-center justify-center gap-8  px-6 py-2 rounded-sm left-0 w-full fixed transition-all border-b border-b-slate-200 dark:border-black  
        }`}
      >
        <Theme />
        <ul
          className=" relative flex items-center gap-8 border-b-transparent border-b transition-all"
          id="bottom-nav "
        >
          {links.map((link) => {
            return (
              <li
                key={link.title}
                className={`relative transition-all border-b-transparent border-b hover:border-b-fuchsia-500 `}
              >
                <Link href={path === '/' ? link.href : '/' + link.href}>
                  {link.title}
                </Link>

                {activeSection === link.title.toLowerCase() && (
                  <div
                    className={`h-[1px] w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all  `}
                  />
                )}
              </li>
            );
          })}
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
