import {
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  EducationalWebsite,
  NetflixClone,
  solarSystem,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const projects = [
  {
    name: "Educational Website",
    description:
      "Web-based platform that allows users to search, contact, and know about Technity Institute Mannarkkad, which is an institute that teaches chip level training courses.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      
    ],
    image: EducationalWebsite,
    source_code_link: "https://github.com/risz11/Educational-website.git",
  },
  {
    name: "Netflix clone UI",
    description:
      "UI of the popular video straming site Netflix. Implement user interface designs using React.js, ensuring high-quality code and optimal performance. ",
      tags:[
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
     
  
    image: NetflixClone,
    source_code_link: "https://github.com/risz11/netflix-cl0ne.git",
  },

  {
    name: "3D model of Solar System",
    description:
      "A 3D imitation of our solar system,Implemented smooth camera controls, lighting effects, and realistic material rendering.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: solarSystem,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies,projects };
