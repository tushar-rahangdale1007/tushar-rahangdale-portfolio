export const profile = {
  name: "Tushar Rahangdale",
  firstName: "Tushar",
  lastName: "Rahangdale",
  role: "Java & Spring Boot Developer",
  availability: "Open to Junior Java Developer roles",
  location: "Nagpur, Maharashtra, India",
  phone: "7767835302",
  phoneHref: "tel:+917767835302",
  email: "tushar.rahangdale1007@gmail.com",
  emailHref: "mailto:tushar.rahangdale1007@gmail.com",
  linkedin: "#",
  github: "#",
  summary:
    "B.Tech Computer Science graduate with internship and project experience in Java and Spring Boot. Strong foundation in programming, problem-solving, and software development, with hands-on work across REST APIs, Spring Data JPA, MySQL and React frontends.",
  lookingFor:
    "Looking for a Junior Java Developer role where I can build production backends, write tests I stand behind, and keep learning from a team that reviews code honestly.",
} as const;

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "Python (basics)", "SQL"],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
    ],
  },
  {
    title: "Frontend",
    items: ["React.js", "HTML5", "CSS3"],
  },
  {
    title: "Databases",
    items: ["MySQL"],
  },
  {
    title: "Tools & Practices",
    items: ["Git", "GitHub", "Maven", "VS Code", "Agile Methodology"],
  },
  {
    title: "CS Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "Cloud & AI",
    items: [
      "AWS",
      "Machine Learning (foundational)",
      "Generative AI",
      "Prompt Engineering",
    ],
  },
] as const;

export const experience = [
  {
    role: "Web Development Intern",
    org: "9Teen Initiative",
    place: "Gondia, Maharashtra",
    period: "Feb 2026 – May 2026",
    link: "#",
    linkLabel: "Internship link",
    bullets: [
      "Built responsive, cross-browser web interfaces using HTML5, CSS3 and JavaScript, improving page usability across desktop and mobile viewports.",
      "Integrated frontend components with backend services, debugging and resolving functional issues to keep data flow reliable.",
      "Collaborated using Git/GitHub version control in a team environment and maintained structured project documentation for handoff and review.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Smart Healthcare Management System",
    period: "Sep 2026",
    stack: ["Java", "Spring Boot", "JPA", "Hibernate", "React", "MySQL"],
    headline:
      "Full-stack healthcare application for managing patients, doctors and appointments.",
    bullets: [
      "Developed a full-stack healthcare management application using Spring Boot, React and MySQL.",
      "Implemented RESTful CRUD APIs with Spring Data JPA/Hibernate for patient, doctor and appointment management with relational database mapping.",
      "Implemented MySQL-backed authentication using Spring Security, BCrypt password hashing and a custom UserDetailsService.",
      "Built a React frontend integrated with Spring Boot APIs, covering patient listing, registration, update and delete.",
    ],
    link: "#",
    featured: true,
  },
  {
    name: "Employee Management System",
    period: "Jan 2026",
    stack: ["Java", "JDBC", "MySQL", "OOP", "Git", "GitHub"],
    headline:
      "Console-based employee records application built on plain JDBC and MySQL.",
    bullets: [
      "Implemented CRUD operations using JDBC and MySQL with Prepared Statements and parameterized SQL queries.",
      "Applied OOP concepts, input validation and duplicate ID handling, with Git/GitHub for version control.",
    ],
    link: "#",
    featured: false,
  },
] as const;

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "GWCET, Nagpur",
    period: "2022 – 2026",
    result: "CGPA: 7.2 / 10",
  },
  {
    degree: "Higher Secondary School",
    school: "Dhote Bandhu Science College, Gondia",
    period: "2020 – 2021",
    result: "83.83%",
  },
  {
    degree: "Secondary School",
    school: "Jankidevi Chauragade High School, Gondia",
    period: "2018 – 2019",
    result: "79.40%",
  },
] as const;
