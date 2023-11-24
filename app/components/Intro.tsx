'use client';

import letscode from '@/public/code.svg';
import { preferedStacks } from '../lib/data';
import { bevanDisplay, ralewaySans } from '../lib/fonts';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useObserverContext } from '../context/intersectionObserver';
import Glow from './common/Glow';
import ThemedImage from './common/ThemedImage';
import BigImageGlow from './common/BigImageGlow';

function Intro() {
  const { ref: introRef, entry, inView: introInView } = useInView();

  const { setActiveSection } = useObserverContext();

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
          <span
            className={` text-[4em] text-gray-600 dark:text-pink-200 whitespace-nowrap ${ralewaySans.className}`}
          >
            I am Zoran
          </span>
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
                <ThemedImage themeImage={stack} />
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
        <BigImageGlow />
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
