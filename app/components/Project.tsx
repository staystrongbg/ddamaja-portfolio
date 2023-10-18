'use client';
import { useTheme } from 'next-themes';

import Image, { StaticImageData } from 'next/image';
import Glow from './common/Glow';
type Project = {
  title: string;
  id: number;
  img: StaticImageData;
  link: string;
  stack: {
    title: string;
    image: StaticImageData;
    imageDark: StaticImageData;
  }[];
};
const Project = ({ project }: { project: Project }) => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center border rounded-lg  h-[300px]  overflow-hidden dark:border-black border-purple-200 shadow-lg transition-all">
      <div className="flex-1 items-center justify-center h-full flex dark:bg-[#040404] bg-gray-100  flex-col gap-12 ">
        <h3 className="text-[2em] dark:text-gray-50">{project.title}</h3>
        <ul className="flex gap-4">
          {project.stack.map((item, idx) => (
            <li
              key={idx}
              className="hover:scale-125 hover:opacity-100 opacity-60 transition-all relative rounded-full"
              title={item.title}
            >
              <Glow
                background="bg-gradient-to-r from-blue-500 to-cyan-500"
                width="w-full"
                height="h-[20px]"
              />

              <Image
                src={theme === 'dark' ? item.imageDark : item.image}
                alt={item.title}
                width={32}
                height={32}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 relative h-full w-[300px] grayscale hover:grayscale-0 transition-all">
        <Image
          src={project.img}
          fill
          className="absolute object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Project;
