import { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  id: number;
  img: string;
  link: string;
  stack: {
    title: string;
    image: string;
    imageDark: StaticImageData;
  }[];
  image: StaticImageData;
  imageDark: string;
};
