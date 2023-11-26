import { StaticImageData } from 'next/image';
import { PortableTextBlock } from 'sanity';

export type SocialIcons = {
  title: string;
  image: StaticImageData;
  imageDark: StaticImageData;
  url: string;
};

export type Stack = {
  title: string;
  image: StaticImageData;
  imageDark: StaticImageData;
};

export type Project = {
  title: string;
  id: number;
  img: StaticImageData;
  link: string;
  stack: Stack[];
};

export type Post = {
  id: Id;
  title: string;
  createdAt: string;
  image: string;
  text: PortableTextBlock;
  tags: string[];
  shortText: string;
};

type Id = {
  current: string;
};
