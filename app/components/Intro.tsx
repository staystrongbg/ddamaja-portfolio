'use client';
import codeStickers from '@/public/sitckers.jpg';
import keyboard from '@/public/keyboard.svg';
import letscode from '@/public/code.svg';
import { preferedStacks } from '../lib/data';
import { bevanDisplay, ralewaySans } from '..//lib/fonts';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useObserverContext } from '../context/intersectionObserver';
import { useThemeContext } from '../context/themeContext';
function Intro() {
  const { isDark } = useThemeContext();
  const { ref: introRef, entry, inView: introInView } = useInView();

  const { setActiveSection, shouldObserverHandleScroll } = useObserverContext();

  useEffect(() => {
    if (entry?.isIntersecting && shouldObserverHandleScroll) {
      setActiveSection('home');
      entry?.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [entry?.isIntersecting]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      id="intro"
      className=" flex-container-center w-full sm:flex-row flex-col my-8"
    >
      <div className="flex flex-1 flex-col justify-center items-center">
        <div>
          <h1
            ref={introRef}
            className={` text-gray-900 dark:text-yellow-300  text-[4em]  lg:text-[6em]  xl:text-[9em] ${bevanDisplay.className}`}
          >
            Welcome!
          </h1>
          <h3
            className={` text-[4em] text-gray-600 dark:text-pink-200 whitespace-nowrap ${ralewaySans.className}`}
          >
            {' '}
            I am Zoran
          </h3>
          <h3
            className={`  text-gray-600 dark:text-pink-200 -mt-4 text-3xl   `}
          >
            Javascript Developer{' '}
          </h3>
          <div className="flex gap-4 mt-2">
            {preferedStacks.map((stack, idx) => (
              <span key={idx}>
                <Image
                  src={stack.image}
                  alt={stack.title}
                  title={stack.title}
                  width={32}
                  className="hover:scale-125 opacity-60 transition-transform
                  hover:opacity-100"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="code flex-1 flex items-center justify-center relative">
        <Image
          src={letscode}
          alt="lets-code"
          width={800}
          className={`opacity-90  dark:opacity-100 -z-0`}
        />
        {/* <span>LETS CODE</span> */}
      </div>
    </motion.div>
  );
}

export default Intro;
