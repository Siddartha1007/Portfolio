import project1 from "../assets/projects/expensestracker.jpg";
import project2 from "../assets/projects/railway_ticket.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1.5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
// export const HERO_CONTENT = 'As an experienced Full Stack Software Engineer with more than 1.5 years in the field, I am committed to crafting innovative solutions that drive success and have a meaningful impact. My technical proficiency covers a broad spectrum of programming languages and technologies, such as C++, Java, JavaScript, ReactJS, NodeJS, SQL, MongoDB, and RESTful API development. I am excited to connect with fellow professionals and am seeking a challenging and rewarding career in a reputed organization where I can learn new skills, expand my knowledge, and fully utilize my training and abilities while making a significant contribution to the success of the company.'
export const HERO_CONTENT = 'As an experienced Full Stack Software Engineer with over one and half years in the industry, I am dedicated to developing innovative solutions that drive organizational success and deliver substantial impact. My technical proficiency spans a wide array of programming languages and technologies, including C++, Java, JavaScript, ReactJS, NodeJS, SQL, MongoDB, and RESTful API development. I am keen to contribute to a reputable organization by leveraging my skills in programming and solution development to foster growth and excellence.';

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
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
    description: ["Leveraged the Flutter framework to develop a real-time mobile application, creating an interactive dashboard that increased user engagement by 20% and showcased trending company services with enhanced functionalities.", 
                  'DDesigned and integrated multiple API’s with the help of Firebase fire-store, optimising the application’s core functionality and ensuring robust, secure and efficient data handling and management processes.', 
                  'Engineered an automated CI/CD pipeline using Jenkins, streamlining build, test, and deployment processes. Enhanced test coverage and tracked issues in Jira, reducing bugs by 40% for reliable software delivery.'],
    technologies: ["Flutter", "Dart", "Firebase database", "Jenkins", "CI/CD", "Jira"],
  },

];

export const PROJECTS = [
  {
    title: "Expenses tracker Web Application",
    image: project1,
    description:
      ["Built a full-stack web application to track daily expenses for effective budgeting and financial planning.", 
      "Implemented application features include real time budget tracking, data visualisation, secure user authentication.", 
      "Technologies used include HTML, CSS for frontend, NodeJS for API handling and MongoDB for database."],

    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    code: 'N'
  },
  {
    title: "Full Stack Railway Ticketing System",
    image: project2,
    description:
[     "Built a Ruby on Rails web application for railway ticket booking with features like user authentication, profile management, dynamic seat availability, rating-review system and a comprehensive admin dashboard.", 
      "Implemented testing using the Spec framework achieving 90% coverage to ensure system reliability.", 
      "Used Ruby on Rails for the backend functionality alongside React to enhance the user interface."],
    href : ["https://github.ncsu.edu/sgoruga/CS517-Rail-Ticketing-System"],
    technologies: ["Ruby on Rails", "React", "MySQL"],
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
      ["Developed a gitlab miner tool to extract user specific metrics and activities using GraphQl queries.", 
      "Executed graphql queries to obtain detailed insights into user contributions on gitlab which include gists, issues, pull requests, repository discussions and overall repository contributions.", 
      "Constructed an user-friendly user interface using React framework to effectively display extracted metrics."],
    href: [ "https://github.ncsu.edu/sgoruga/G2371" ],
    technologies: ["GitLab", "GraphQL", "React"],
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
  address: "1900 Fox Sterling Dr, North Carolina, 27606 ",
  phoneNo: "+1 667-415-8734 ",
  email: "sgoruga@ncsu.edu",
};


["Built a full-stack web application to track daily expenses for effective budgeting and financial planning.", "Implemented application features include real time budget tracking, data visualisation, secure user authentication.", "Technologies used include HTML, CSS for frontend, NodeJS for API handling and MongoDB for database."]