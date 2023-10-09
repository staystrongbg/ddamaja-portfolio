import nextjs from '@/public/nextjs-icon-svgrepo-com.svg';
import reactjs from '@/public/logo-react-svgrepo-com.svg';
import twcss from '@/public/tailwindcss-svgrepo-com.svg';
import prisma from '@/public/prisma-svgrepo-com.svg';
import express from '@/public/express-svgrepo-com.svg';
import nodejs from '@/public/nodejs01-svgrepo-com.svg';
import mongodb from '@/public/mongodb-svgrepo-com.svg';
import typescript from '@/public/typescript-16-svgrepo-com.svg';
import firebase from '@/public/firebase-svgrepo-com.svg';
import postgresql from '@/public/postgresql-svgrepo-com.svg';
import sanity from '@/public/sanity-svgrepo-com.svg';
import contentful from '@/public/contentful-svgrepo-com.svg';
import github from '@/public/github-142-svgrepo-com.svg';
import html from '@/public/html5-01-svgrepo-com.svg';
import css from '@/public/css3-01-svgrepo-com.svg';
import sass from '@/public/sass-svgrepo-com.svg';

export const links = [
  {
    title: 'Home',
    href: '#intro',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
];

export const preferedStacks = [
  {
    title: 'Next.js',
    image: nextjs,
  },
  {
    title: 'React.js',
    image: reactjs,
  },
  //   {
  //     title: 'TailwindCSS',
  //     image: twcss,
  //   },
];

export const allTechnologies = [
  {
    title: 'Next.js',
    image: nextjs,
  },
  {
    title: 'React.js',
    image: reactjs,
  },
  {
    title: 'TailwindCSS',
    image: twcss,
  },
  {
    title: 'Prisma',
    image: prisma,
  },
  {
    title: 'Express.js',
    image: express,
  },
  {
    title: 'Node.js',
    image: nodejs,
  },
  {
    title: 'MongoDB',
    image: mongodb,
  },
  {
    title: 'TypeScript',
    image: typescript,
  },
  {
    title: 'Firebase',
    image: firebase,
  },
  {
    title: 'PostgreSQL',
    image: postgresql,
  },
  {
    title: 'Sanity',
    image: sanity,
  },
  {
    title: 'Contentful',
    image: contentful,
  },
  {
    title: 'GitHub',
    image: github,
  },
  {
    title: 'HTML',
    image: html,
  },
  {
    title: 'CSS',
    image: css,
  },
  {
    title: 'SASS',
    image: sass,
  },
];

export const projects = [
  {
    id: 3,
    img: './images/sikimoto.png',
    link: 'https://sikimoto-app.netlify.app',
    stack: 'Reactjs',
  },

  {
    id: 5,
    img: './images/mssrbija.png',
    link: 'https://mssrbija.netlify.app',
    stack: 'Reactjs',
  },

  {
    id: 7,

    img: './images/recepti.png',
    link: 'https://devox-recepti.netlify.app',
    stack: 'Reactjs, Firebase, TailwindCSS, GoogleAuth',
  },
  {
    id: 8,
    img: './images/kameleon.png',
    link: 'https://sala-ketering-kameleon.com',
    stack: 'Vanilajs, Sass',
  },
  {
    id: 9,
    img: './images/ciklogen-next.png',
    link: 'https://ciklogen-next.vercel.app',
    stack: 'Nextjs, Sass',
  },
  {
    id: 1,
    img: './images/ask23.png',
    link: 'https://ask23.rs/',
    stack: 'Nextjs, TailwindCSS, Sanity',
  },
  {
    id: 2,
    img: './images/devox-notes.png',
    link: 'https://devox-notes.netlify.app/',
    stack: 'Reactjs, Sass, Firebase, GoogleAuth',
  },
  {
    id: 4,
    img: './images/gallery.png',
    link: 'https://shone-gallery.netlify.app/',
    stack: [
      {
        title: 'Reactjs',
        image: reactjs,
      },
      {
        title: 'TailwindCSS',
        image: twcss,
      },
      {
        title: 'Prisma',
        image: prisma,
      },
    ],
  },
];

// mozda bi bilo fancy staviti i faq cisto nekoliko pitanja fore radi
