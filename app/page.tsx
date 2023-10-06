import Image from 'next/image';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
