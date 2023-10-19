'use client';
import letscode from '@/public/code.svg';
import { preferedStacks } from '../lib/data';
import { bevanDisplay, ralewaySans } from '..//lib/fonts';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useObserverContext } from '../context/intersectionObserver';
import { useTheme } from 'next-themes';
import Glow from './common/Glow';

function Intro() {
  const { ref: introRef, entry, inView: introInView } = useInView();

  const { setActiveSection } = useObserverContext();

  const { theme } = useTheme();

  useEffect(() => {
    if (entry?.isIntersecting) {
      setActiveSection('home');
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
            className={` main-header  text-[4em]  lg:text-[6em]  xl:text-[9em] ${bevanDisplay.className}`}
          >
            Welcome!
          </h1>
          <h3
            className={` text-[4em] text-gray-600 dark:text-pink-200 whitespace-nowrap ${ralewaySans.className}`}
          >
            I am Zoran
          </h3>
          <h3
            className={`  text-gray-600 dark:text-pink-200 -mt-4 text-3xl   `}
          >
            Javascript Developer{' '}
          </h3>
          <div className="flex gap-10 mt-6">
            {preferedStacks.map((stack, idx) => (
              <span
                key={idx}
                className="relative hover:scale-125 opacity-60 transition-transform
              hover:opacity-100 "
                title={stack.title}
              >
                <Image
                  src={theme === 'dark' ? stack.imageDark : stack.image}
                  alt={stack.title}
                  width={42}
                  className=""
                />

                <Glow
                  background="bg-gradient-to-r from-blue-500 to-cyan-500"
                  width="w-full"
                  height="h-[20px]"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="code flex-1 flex items-center justify-center relative">
        {theme === 'dark' ? (
          <Glow
            rotate="-rotate-12"
            background="bg-gradient-to-r from-[#181123] via-cyan-800 to-[#181123]"
            height="h-[95%]"
            width="w-[95%]"
          />
        ) : (
          <Glow
            rotate="-rotate-12"
            height="h-[95%]"
            width="w-[95%]"
            background="bg-gradient-to-r from-yellow-200 to-cyan-100"
          />
        )}
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
