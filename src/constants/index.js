import project1 from "../assets/projects/expensestracker.jpg";
import project2 from "../assets/projects/railway_ticket.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1.5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
// export const HERO_CONTENT = 'As an experienced Full Stack Software Engineer with more than 1.5 years in the field, I am committed to crafting innovative solutions that drive success and have a meaningful impact. My technical proficiency covers a broad spectrum of programming languages and technologies, such as C++, Java, JavaScript, ReactJS, NodeJS, SQL, MongoDB, and RESTful API development. I am excited to connect with fellow professionals and am seeking a challenging and rewarding career in a reputed organization where I can learn new skills, expand my knowledge, and fully utilize my training and abilities while making a significant contribution to the success of the company.'
export const HERO_CONTENT = 'Welcome to my portfolio! This space offers a glimpse into my journey, showcasing my skills and projects. Here, you can explore my work in full-stack development, web applications, and other creative endeavors that highlight my problem-solving approach and technical expertise. I am passionate about developing innovative solutions that make a lasting impact. Let’s build something remarkable together!';
// export const HERO_CONTENT = 'I am a dedicated and skilled software developer with a strong foundation in computer science, currently pursuing a Masters degree at North Carolina State University. My professional experience includes working as a Software Developer Engineer at Broadridge and as an intern at Fosterate, where I contributed to both web and mobile projects. I have developed and optimized applications using technologies such as ReactJS, JavaScript, NodeJS, and Flutter, and have experience with blockchain technology through projects like DLT Repo. Additionally, I have worked on data analytics projects, including utilizing various machine learning models to predict 2024 carbon emissions based on historical data. My core skills include programming in C++, Java, and Python, as well as proficiency in SQL, NoSQL, and Firebase. I am passionate about leveraging my technical skills to build innovative solutions and contribute to impactful projects in the tech industry. ';
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const EXPERIENCES = [
  {
    year: "11/2024 - Present",
    role: "Graduate Assistant",
    company: "North Carolina State University",
    description: 
    ["Developed and optimized RESTful APIs using Node.js, enhancing scalability to support 2,000+ concurrent users and boosting data processing efficiency by 25%.", 
    'Implemented Angular-based UI components with JavaScript and Material-UI, utilizing lazy loading, state management, and performance monitoring with Grafana for better performance and user experience.', 
    'Contributed to open-source improvements, optimized SQL queries to accelerate data retrieval by 30%, and implemented Git-based version control with thorough code reviews to streamline code management.'],
    technologies: ["Angular.js", "Javascript", "RESTful APIs", "Grafana", "SQL", "Git"],
  },
  {
    year: "07/2022 - 07/2023",
    role: "Software Developer Engineer",
    company: "Broadridge",
    description: 
    ["Worked on the project 'DLT Repo', a Blockchain-based platform for repo transactions, utilising RESTful APIs and DAML to streamline settlement processes, enhancing transaction efficiency by around 30%.", 
    'Involved in the initial design of the Sponsored Repos model, developed Node.js API endpoints for settlements, and built user-centric screens using Material UI and React.js, enhancing system responsiveness by 50%.', 
    'Utilized PostgreSQL for robust data management and Docker for containerization of services, ensuring scalable and secure application deployment; maintained code integrity and workflow using GIT.',
    'Operated in an Agile environment, collaborating with a 40-member web team to streamline development processes.'],
    technologies: ["Javascript", "React.js", "Node.js", "RESTful APIs", "PostgreSQL", "DAML", "Agile Methodologies", "Docker"],
  },
  {
    year: "02/2022 - 06/2022",
    role: "Software Developer Intern",
    company: "Fosterate",
    description: ["Leveraged the Angular framework to develop a real-time web application, creating an interactive dashboard that increased user engagement by 50% and showcased trending company services with enhanced functionalities.", 
                  'Designed and integrated multiple API’s with help of Spring Boot in Java, optimising application’s core functionality and ensuring efficient data handling and management processes, which increased data processing speed by 40%', 
                  'Engineered an automated CI/CD pipeline using Jenkins, streamlining build, test, and deployment processes. Enhanced test coverage and tracked issues in Jira, reducing bugs by 60% for reliable software delivery.'],
    technologies: ["Angular", "Spring Boot", "Jenkins", "CI/CD", "Jira"],
  },

];

export const PROJECTS = [
  {
    title: "Expenses tracker Web Application",
    image: project1,
    description:
      ["Built a full-stack web application using Javascript and Node.js to track expenses for budgeting and financial planning.", 
      "Developed backend services in Node.js, focusing on API development, risk management by implementing secure auth.", 
      "Integrated Tesseract.js to automate receipt scanning and text extraction using OCR technology, simplifying expense input."],

    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    code: 'N'
  },
  {
    title: "Full Stack Railway Ticketing System",
    image: project2,
    description:
[     "Built a Ruby on Rails-based MVC web application for railway ticket booking, integrating React for a dynamic front-end, SQL for database management, and JavaScript with Websockets for real-time updates and interactive functionalities.", 
      "Implemented JWT-based authentication, and achieved 90% test coverage using BDD/TDD with RSpec.", 
      "Built key features such as user authentication, admin dashboard, and a rating system, improving user engagement."],
    href : ["https://github.ncsu.edu/sgoruga/CS517-Rail-Ticketing-System"],
    technologies: ["Ruby on Rails", "React", "MySQL", "MVC"],
    code: 'Y'
  },
  {
    title: "Carbon Emission prediction Using Machine Learning",
    image: project3,
    description:
      ["Utilized multiple machine learning models including Linear Regression, Decision Tree, Random Forest, and Support Vector Machine models to predict 2024 carbon emissions based on historical data.", 
      "Employed the Climate Watch Historical GHG Emissions dataset, covering 193 countries from 1990 to 2020.", 
      "Applied machine learning techniques to enhance prediction accuracy, achieving a 30% lower RMSE with Linear Regression compared to the next best model."],

    technologies: ["Linear Regression", "RMSE", "Python"],
    code: 'N'
  },
  {
    title: "GitLab User Metrics Explorer with GraphQL",
    image: project4,
    description:
      ["Developed a tool to extract user-specific metrics by executing GraphQL queries and utilizing JSON for data processing.", 
      "Integrated LLaMA 3.1 to turn structured JSON data from GitHub and GitLab into clear, natural-language summaries, making user contributions easy to understand.",
      "Executed graphql queries to gather detailed insights into user contributions to gitlab which include gists, issues, pull requests, repository discussions and overall repository contributions enabling detailed analysis of performance metrics."],
    href: [ "https://github.ncsu.edu/sgoruga/G2371" ],
    technologies: ["GitLab", "GraphQL", "React", "Json"],
    code: 'Y'
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //   ["A personal portfolio website showcasing projects, skills, and contact information."],
  //   href:["https://github.com/Siddartha1007/Portfolio"],
  //   technologies: ["Tailwind CSS", "React"],
  //   code: 'N'
  // },
  
];

export const CONTACT = {
  address: "Raleigh, NC, USA ",
  phoneNo: "+1 (667) 415-8734 ",
  email: "sgoruga@ncsu.edu",
};



["Built a full-stack web application to track daily expenses for effective budgeting and financial planning.", "Implemented application features include real time budget tracking, data visualisation, secure user authentication.", "Technologies used include HTML, CSS for frontend, NodeJS for API handling and MongoDB for database."]