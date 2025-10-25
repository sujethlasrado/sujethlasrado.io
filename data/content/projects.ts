import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "FullstackWithDocker",
    desc: "A simple full-stack Dockerized application with a Vite React frontend, Node.js/Express backend, and PostgreSQL database. Easily deployable with Docker Compose.",
    img: "/static/projects/docker-image.png",
    link: "https://github.com/sujethlasrado/FullstackWithDocker",
    github: "https://github.com/sujethlasrado/FullstackWithDocker",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
    ],
  },
  {
    id: 1,
    title: "Attendance Management System",
    desc: "Full Stack Attendance Management System built with Spring Boot backend and React.js frontend. Features include viewing, adding, deleting attendance records and generating PDF reports.",
    img: "/static/projects/buildfaster.png",
    link: "https://github.com/sujethlasrado/AttendanceManagement-Backend/tree/backend-code",
    github:
      "https://github.com/sujethlasrado/AttendanceManagement-Frontend/tree/frontend-code",
    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "REST APIs",
      "Bootstrap",
    ],
  },
  {
    id: 2,
    title: "DrumSet",
    desc: "A web-based virtual drum set application built with JavaScript, HTML & CSS. Features clickable drum pads and keyboard support for playing different drum sounds.",
    img: "/static/projects/drumset.png",
    link: "https://github.com/sujethlasrado/DrumSet/tree/main",
    github: "https://github.com/sujethlasrado/DrumSet/tree/main",
    tags: ["JavaScript", "HTML", "CSS", "Audio", "Web Audio API"],
  },
  //   {
  //     id: 3,
  //     title: "BitcoinTemp",
  //     desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
  //     img: "/static/projects/bitcointemp.png",
  //     link: "https://bitcointemp.com",
  //     tags: ["React", "NextJS", "SCSS", "API"],
  //   },
  //   {
  //     id: 4,
  //     title: "Create HTML Boilerplate",
  //     desc: "Generate a vanilla HTML boilerplate in a flash!",
  //     img: "/static/projects/create-html-boilerplate.png",
  //     github: "https://github.com/BraydenTW/create-html-boilerplate",
  //     tags: ["Node", "Javascript", "NPM", "HTML"],
  //   },
  //   {
  //     id: 5,
  //     title: "8 Ball in your CLI",
  //     desc: "An 8 ball simulation in your CLI built with Rust!",
  //     img: "/static/projects/8ball-rust.png",
  //     github: "https://github.com/BraydenTW/8ball-rust",
  //     tags: ["Rust", "CLI", "Game"],
  //   },
  //   {
  //     id: 6,
  //     title: "DontLeaveMe 😭",
  //     desc: "Beg for users to stay on your website.",
  //     img: "/static/projects/dontleaveme.png",
  //     link: "https://github.com/BraydenTW/dontleaveme/",
  //     tags: ["Javascript", "NPM"],
  //   },
  //   {
  //     id: 7,
  //     title: "Madlibs",
  //     desc: "A simple version of Madlibs built for the web!",
  //     img: "/static/projects/madlibs.png",
  //     link: "https://fillemin.netlify.app/",
  //     github: "https://github.com/braydentw/madlibs",
  //     tags: ["HTML", "CSS", "Javascript"],
  //   },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
