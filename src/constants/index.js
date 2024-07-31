import {
  python,
  logopython,
  bootstrap,
  azure,
  heroku,
  jquery,
  postgresql,
  mysql,
  ux,
  js,
  web,
  javascript,
  html,
  adobe,
  reactjs,
  tailwind,
  mongodb,
  github,
  olympic,
  blog,
  guesscard,
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
    name: "github",
    icon: github,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: logopython,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Heroku",
    icon: heroku,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },

  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Adobe Suit",
    icon: adobe,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "https://github.com/Alena18",
    icon: github,
    iconBg: "#00cea8",
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
    iconBg: "#00cea8",
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
    iconBg: "#00cea8",
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
    iconBg: "#00cea8",
    date: "2020 - 2021",
    points: [
      "Conducting thorough UX research to create user personas and journey maps, ensuring a deep understanding of user needs and behaviors.",
      "Developing wireframes and prototypes to visualize and test design concepts, facilitating rapid iteration and user feedback integration.",
      "Collaborating with cross-functional teams to align design solutions with business goals and technical constraints, ensuring cohesive product development.",
      "Applying usability testing and heuristic evaluation methods to identify and address usability issues, enhancing overall user experience.",
    ],
  },
];

const projects = [
  {
    name: "Victoria's Bakery Blog",
    description:
      "Victoria's Bakery Blog is a web-based platform that allows users to explore, comment on, and like a variety of recipes, as well as discover cooking tricks and tips, providing a delightful and interactive resource for baking enthusiasts.",
    tags: [
      {
        name: "Heroku",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: blog,
    source_code_link:
      "https://github.com/Alena18/BakeryBlog3?tab=readme-ov-file",
  },
  {
    name: "Memory Game",
    description:
      "Flashcards English Belarusian Pets Memory Game Flashcards English Belarusian Pets Memory Game is the site that represents a flashcard game.",
    tags: [
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "GitHub",
        color: "green-text-gradient",
      },
    ],
    image: guesscard,
    source_code_link:
      "https://github.com/Alena18/FlashcardsEnglishBelarusianPetsMemoryGame",
  },
  {
    name: "RetrOlympic Hackathon Game",
    description:
      "Developed a retro game in 30 hours using the Kaboom.js framework, transforming game design and art assets into a fully functioning and playable game in JavaScript.",
    tags: [
      {
        name: "Kaboom.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: olympic,
    source_code_link: "https://github.com/Alena18/Retro-Olympic-Sidescroller",
  },
];

export { services, technologies, experiences, projects };
