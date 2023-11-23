'use client';
import Image from 'next/image';
import { allTechnologies } from '../lib/data';
import { useInView } from 'react-intersection-observer';
import { useObserverContext } from '../context/intersectionObserver';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Glow from './common/Glow';
import ThemedImage from './common/ThemedImage';
import me from '../../public/me.jpeg';
function About() {
  const { inView: aboutInView, ref: aboutRef, entry } = useInView();
  const { setActiveSection } = useObserverContext();
  const { theme } = useTheme();

  useEffect(() => {
    if (entry?.isIntersecting) {
      setActiveSection('about');
      // entry?.target.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'center',
      // });
    }
  }, [entry?.isIntersecting]);
  //TODO: napraviti custom hook i arr svih sekcija pa na scroll event scrollinto view sekciju koja je na radu?
  return (
    <div id="about" className="flex-col flex-container-center gap-12">
      <h3 ref={aboutRef} className="text-[4em] dark:text-[#6ae2d0]  relative">
        About me
      </h3>
      <div className="flex gap-8">
        <div className="relative w-[150px] rounded-lg overflow-hidden">
          <Image src={me} fill alt="Zoran" objectFit="cover" className="  " />
          <div className="absolute inset-0 bg-gray-300 mix-blend-multiply"></div>
        </div>
        <div>
          <p className="max-w-xl">
            <b>Goal</b>
            <br />
            I work hard to attain best knowledge and skills in modern web
            development. I enjoy learning new technologies and frameworks.
            <br />
            <br />
            <b>Summary</b>
            <br />I am working with <b>JavaScript</b> for 9 years, 4 years with
            <b> React.js</b> and over 2 years with <b>Next.js</b>. These have
            been my main areas of focus.
            <br />
            <br />
            Other technologies I picked up along the way <br />
          </p>
          <div className="flex flex-wrap gap-8 py-8 max-w-xl">
            {allTechnologies.map((technology) => (
              <div
                key={technology.title}
                className="hover:scale-125 hover:opacity-100 opacity-60 transition-all relative rounded-full"
                title={technology.title}
              >
                <ThemedImage themeImage={technology} />
                <Glow
                  background="bg-gradient-to-r from-blue-500 to-cyan-500"
                  width="w-full"
                  height="h-[20px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
