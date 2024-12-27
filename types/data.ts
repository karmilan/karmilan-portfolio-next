"use strict";

export type MyDetails = {
  name: string;
  email: string;
  description: string;
  profession: string;
  linkedInUrl: string;
  skills: string[];
};

export type Experiences = {
  title: string;
  company: string;
  yearRange: string;
  description: string;
  logo?: string;
};

export type Projects = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
};

export const myDetails: MyDetails = {
  name: "Karmilan Mahendrarasa",
  email: "delftkarmilan@gmail.com",
  description:
    "A highly skilled Software Engineer with 3 years of experience in full stack development, specializing in front end and back-end technologies, including React, Node.js, and AWS. Proven track record of designing and deploying scalable, serverless applications. Proficient in UI/UX design with tools like Adobe XD and Figma, Aiming to leverage technical expertise and creativity to contribute to a dynamic team and drive innovation in software solutions.",
  profession: "Software Engineer",
  linkedInUrl: "https://www.linkedin.com/in/mahendrarasa-karmilan-0552b119b/",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "MUI",
    "Tailwind CSS",
    "Bootstrap",
  ],
};

export const experiences: Experiences[] = [
  {
    title: "Associated Software Engineer",
    company: "eBuilder Technology Center",
    yearRange: " Nov 2023 - Nov 2024",
    description:
      "Delivered full stack development for the CAAS Project, utilizing React for front-end, Node.js for back-end, and AWS for cloud services.",
    logo: "/images/hcltech-new-logo.svg", // Example logo
  },
  {
    title: "Apprentice Software Engineer",
    company: "eBuilder Technology Center",
    yearRange: "Sept 2022 - Aug 2023",
    description:
      "Assisted in full stack development for the CAAS Project, working with React on the front-end and Node.js on the back-end.",
    logo: "/images/eBuilder-logo.jpg", // Example logo
  },
  {
    title: "Software Engineer",
    company: " HCL Technologies Lanka",
    yearRange: "Sept 2021 - sept 2022",
    description:
      "Assisted in full stack development for the CAAS Project, working with React on the front-end and Node.js on the back-end.",
    logo: "/images/eBuilder-logo.jpg", // Example logo
  },
];

export const projects: Projects[] = [
  {
    title: "Shop Management System",
    description:
      "MERN stack project for managing  inventory, sales, and customer relationships.",
    technologies: ["React", "MUI", "Node.js", "MongoDB", "Express"],
    image: "images/projects/shopmngt.jpeg",
    link: "https://shop-master-webapp.vercel.app/",
  },
  {
    title: "Book Recommendation System",
    description:
      "Modern Book Recommendation System web application that allows users to track their reading habits, leave reviews, and manage their personal book collections.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image: "images/projects/book-rec.jpeg",
    link: "https://bookrec-webapp-dep.vercel.app",
  },

  {
    title: "Hotel App",
    description:
      "Web UI to streamline hotel reservations, utilizing AWS amplify for hosting.",
    technologies: ["React", "Bootstrap"],
    image: "images/projects/hotel-app.jpeg",
    link: "https://dev.d3owd033zyg3b0.amplifyapp.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "Built a personal portfolio showcasing my projects and skills, using React for the front end and hosted in AWS amplify.",
    technologies: ["Next.js", "TypeScript", "Tailwindcss"],
    image: "images/projects/sma2.jpg",
    link: "https://dev.d3owd033zyg3b0.amplifyapp.com/",
  },
  {
    title: "Goal App",
    description:
      "Mobile app focused tracking personal goals. interactivity on both iOS and Android platforms.",
    technologies: ["React Native"],
    image: "images/projects/goal-app2.jpg",
    link: "https://github.com/karmilan/goal-mobile-app",
  },
  {
    title: "Number Guessing Game",
    description:
      "Mobile game where the user inputs a number between 1 and 100, and the app attempts to guess the number.",
    technologies: ["React Native"],
    image: "images/projects/sma2.jpg",
    link: "https://github.com/karmilan/guess-my-number",
  },
];
