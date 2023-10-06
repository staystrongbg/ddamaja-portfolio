import Image from 'next/image';
import { allTechnologies } from '../lib/data';

function About() {
  return (
    <div id="about" className="flex-col flex-container-center gap-12">
      <h3 className="text-[4em]">About me</h3>
      <div>
        <p className="max-w-xl">
          I work hard to attain best knowledge and skills in modern web
          development. I enjoy learning new technologies and frameworks.
          <br />
          <br />I am working with <b>JavaScript</b> for 9 years, 4 years with
          <b> React.js</b> and over 2 years with <b>Next.js</b>. These have been
          my main areas of focus.
          <br />
          <br />
          Other technologies I've been using: <br />
        </p>
        <div className="flex flex-wrap gap-8 py-8 max-w-xl">
          {allTechnologies.map((technology) => (
            <Image
              key={technology.title}
              src={technology.image}
              alt={technology.title}
              width={42}
              height={42}
              className="hover:scale-125 hover:opacity-100 opacity-60 transition-transform"
              title={technology.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
