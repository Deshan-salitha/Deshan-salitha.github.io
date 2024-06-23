import { toBeChecked } from "@testing-library/jest-dom/matchers";

export const SKILLS = [
  {
    title: "Backend",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skill: "Java", percentage: "70%" },
      { skill: "Spring Boot", percentage: "65%" },
      { skill: "MySQL", percentage: "60%" },
      { skill: "Maven", percentage: "70%" },
    ],
  },
  {
    title: "Frontend",
    icon: "./assets/images/frontend-icon.png",
    skills: [
      { skill: "HTML5", percentage: "70%" },
      { skill: "CSS3", percentage: "60%" }
    ],
  },
  {
    title: "Tools",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Github Action", percentage: "70%" },
      { skill: "InteliJ", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      { skill: "Problem-solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Software Engineer at AryaLabs",
    date: "September 2023 - Present",
    responsibilities: [
      "Lead and manage cross-functional teams for the successful delivery of 7 concurrent projects.",
      "Provide mentorship and technical guidance to junior developers on version control systems (VCS) and Git/GitHub collaboration best practices",
      "Collaborate with product managers (PMs) and business analysts (BAs) to ensure clear and comprehensive understanding of project requirements.",
      "Foster a culture of inclusion and collaboration within diverse teams, promoting effective communication and teamwork across multicultural and multiracial backgrounds.",
    ],
  },
  {
    title: "Freelance Software Engineer",
    date: "September 2023 - Present",
    responsibilities: [
      "Developed team leadership skills through participation in project management activities.",
      "Enhanced understanding of the full development lifecycle by gaining experience in key stages."
      ],
  },
  {
    title: "Associate Software Engineer",
    date: "June 2023 - August 2023",
    responsibilities: [
      "Partnered with the technical lead to contribute to the implementation of critical project features.",
      "Independently developed and implemented workflow improvements that demonstrably increased team efficiency and productivity.",
      "Enhanced platform security by implementing measures to mitigate fraudulent user activity, thereby strengthening overall platform integrity.",
    ],
  },
  {
    title: "Trainee Software Engineer",
    date: "December 2022 - May 2023",
    responsibilities: [
      "Played a key role in developing internal software from inception to completion.",
      "Applied expertise in Java Spring Boot framework to actively contribute to the creation and implementation process.",
      "Demonstrated unwavering commitment by seeing the project through from start to finish.",
    ],
  },
  {
    title: "Intern Software Engineer",
    date: "April 2022 - November 2022",
    responsibilities: [
      "Gained hands-on experience and deep understanding of company structure and product as an intern at MEXXAR.",
      "Conducted extensive research to identify optimal strategies for implementing our system effectively.",
      "Helped with my team members to understand anything hard to get though for them",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Work Flow Management Application",
    stack: "Java, MSSQL, Hibernate, Lombok, IntelliJ, JBoss, JUnit, JFS, Activiti",
    responsibilities: [
      "A web application to manage workflow of one of the client. It is a used activiti to create BPM. I was worked as Fullstack developer.",
    ],
  },
  {
    title: "Human Resource Management System",
    stack: "Java, Spring Boot, MySQL, Git, Hibernate, Lombok, IntelliJ",
    responsibilities: [
      "This is developed as internal tool for company’s HR department. I have worked in system design, database development, backend development, and UI integration",
    ],
  },
  {
    title: "BucketList",
    stack: "Java, Spring Boot, MySQL, Git, Hibernate, Lombok, IntelliJ",
    responsibilities: [
      " A platform that helps travelers to plan their adventure on the same site without needing to go to a separate site.",
      "Completed system design from scratch along with database development, and full backend development.",
    ],
  },
  {
    title: "BookSwap",
    stack: "Java, Spring Boot, MySQL, Git, Hibernate, Lombok, IntelliJ",
    responsibilities: [
      " A platform to help local book lovers to exchange, buy and sell rare books among themselves. I have worked in system design, database development, backend development, and UI integration.",
    ],
  }
]