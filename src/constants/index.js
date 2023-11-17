import { meta, shopify, starbucks, tesla } from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
];

export const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Hybrid Solutions',
    icon: starbucks,
    iconBg: '#accbe1',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Corjl',
    icon: tesla,
    iconBg: '#fbc3bc',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developed this responsive web-based application using accessibility standards.',
      'Planned and developed an authentication system with varying levels of security.',
      'Integrated payment solutions to backend.',
      'Implemented a mailing service using Nodejs and Nodemailer.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Finanseer',
    icon: shopify,
    iconBg: '#b7e4c7',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developed and maintained this web application using ReactNative and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'LMS',
    icon: meta,
    iconBg: '#a2d2ff',
    date: 'Jan 2023 - Present',
    points: [
      'Developed and maintained this application using Next and other related technologies.',
      'Optimized and refactored code bases.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/ayobamihybrid',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/ayobami-balogun-423a18140/',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'LMS platform',
    description:
      'Created a web application—a learning platform enabling users to explore their preferred tech courses, make purchases, and learn at their own pace by watching instructional content.',
    link: 'https://github.com/ayobamihybrid/E-learning-client',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/ayobamihybrid/threadsClone',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Pig game',
    description:
      'Pig game is a web based application, a simple yet fun game that can be played between two friends.',
    link: 'https://github.com/ayobamihybrid/Pig-game-attempt',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Omnifood',
    description:
      'Omnifood is a web application, the smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.',
    link: 'https://github.com/ayobamihybrid/omnifood1',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Moviees',
    description:
      'Moviees is a movie booking application that allows user to book their seat in advance in available theaters in their preferrable location across the country.',
    link: 'https://github.com/ayobamihybrid/moviees',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'Amazon',
    description:
      'A react native e-commerce application where users can shop for conveniently for different type of products.',
    link: 'https://github.com/ayobamihybrid/amazon',
  },
];
