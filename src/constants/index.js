import {
  python,
  ux,
  js,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  github,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "JavaScript",
    icon: js,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "UX Design",
    icon: ux,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "https://github.com/Alena18",
    icon: github,
    iconBg: "#383E56",
    date: "2019 - 2024",
    points: [
      "Developing and deploying full-stack applications using a variety of technologies and frameworks, such as React.js, Flask, Django, and Angular, to deliver scalable and maintainable solutions.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to ensure seamless integration of front-end and back-end components and deliver high-quality products.",
      "Implementing responsive design principles and ensuring cross-browser compatibility to provide a consistent user experience across different devices and platforms.",
      "Participating in code reviews and contributing to team development by providing constructive feedback, writing comprehensive documentation, and utilizing version control systems like GitHub and Git.",
    ],
  },
  {
    title: "JavaScript",
    company_name:
      "https://alena18.github.io/FlashcardsEnglishBelarusianPetsMemoryGame/",
    icon: js,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Developing interactive web applications using JavaScript and related libraries and frameworks, ensuring dynamic user experiences and responsive design.",
      "Utilizing JavaScript to build front-end projects with enhanced user interfaces and seamless interactions, leveraging frameworks like React and libraries such as jQuery.",
      "Integrating JavaScript with back-end technologies to create full-stack applications, ensuring smooth data flow and robust performance.",
      "Ensuring code quality and maintainability by participating in code reviews, writing comprehensive documentation, and following best practices in JavaScript development.",
    ],
  },
  {
    title: "Python",
    company_name: "https://hang-a-dictator.herokuapp.com/",
    icon: python,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Developing and maintaining robust back-end services using Python frameworks such as Flask and Django, ensuring scalability and performance.",
      "Creating interactive and dynamic command-line and web-based applications using Python, enhancing user engagement and functionality.",
      "Utilizing Python for data processing, analysis, and visualization to extract actionable insights and drive data-informed decision-making.",
      "Implementing and integrating various third-party APIs and libraries to extend the functionality of Python applications, ensuring seamless and efficient operations",
    ],
  },
  {
    title: "UX Design",
    company_name: "https://alena18.github.io/UX-Design/",
    icon: ux,
    iconBg: "#383E56",
    date: "2020 - 2021",
    points: [
      "Conducting thorough UX research to create user personas and journey maps, ensuring a deep understanding of user needs and behaviors.",
      "Developing wireframes and prototypes to visualize and test design concepts, facilitating rapid iteration and user feedback integration.",
      "Collaborating with cross-functional teams to align design solutions with business goals and technical constraints, ensuring cohesive product development.",
      "Applying usability testing and heuristic evaluation methods to identify and address usability issues, enhancing overall user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
