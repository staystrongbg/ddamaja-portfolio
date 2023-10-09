'use client';
import codeStickers from '@/public/sitckers.jpg';
import { preferedStacks } from '../lib/data';
import { bevanDisplay, ralewaySans, robotoSlab } from '..//lib/fonts';
import Image from 'next/image';
import { motion } from 'framer-motion';
function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      id="intro"
      className=" flex-container-center w-full sm:flex-row flex-col"
    >
      <div className="flex flex-1 flex-col justify-center items-center">
        <div>
          <h1
            className={`  text-[4em]  lg:text-[6em]  xl:text-[9em] ${bevanDisplay.className}`}
          >
            Welcome!
          </h1>
          <h3
            className={` text-[4em] text-gray-600 whitespace-nowrap ${ralewaySans.className}`}
          >
            {' '}
            I am Zoran
          </h3>
          <h3 className={`  text-gray-600 -mt-4 text-3xl   `}>
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
      <div className="code flex-1 flex-container-center text-[20em] ">
        <Image src={codeStickers} alt="code stickers" />
      </div>
    </motion.div>
  );
}

export default Intro;
