// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "orangered",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "React",
    level: "beginner",
    color: "lightblue",
  },
  {
    skill: "C++, C#, Java",
    level: "intermediate",
    color: "lightGreen",
  },
  {
    skill: "Git",
    level: "beginner",
    color: "red",
  },
  {
    skill: "Microsoft Office",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "SQL (MySQL)",
    level: "intermediate",
    color: "beige",
  },
];

const hobbies = [
  {
    title: "Cryptocurrency",
    text: "I do online lectures on this topic   Link: Udemy.com",
  },
  {
    title: "Red Cross organisation",
    text: "Member of City society of Red Cross Samobor Link: https://www.crvenikrizsamobor.hr/",
  },
  {
    title: "Erasmus Buddy",
    text: "Erasmus buddy for foreign students on my university    Link: https://www.algebra.hr/en/be-a-buddy-apply-now-museum-night-is-great-fun-when-you-are-with-yourbuddies/",
  },
  {
    title: "Volunteer",
    text: "Volunteer on financial literacy conference (Konferencija financijske pismenosti) Toni Milun    Link: https://www.tonimilun.hr/",
  },
  {
    title: "Lectures on communication",
    text: "Lecture on communication organized by Red Cross Samobor    Kresimir Sockovic - Consulting & Training Manager, Communicato    Link: https://www.linkedin.com/in/ksockovic/?originalSubdomain=hr",
  },
];

const projects = [
  {
    title: "Algebra.hr website",
    date: "02/2022",
    skils: "HTML, CSS, Bootstrap, JavaScript, JQuery",
    task: [
      "Solved HTML structure of each web page",
      "Made each web page responsive using CSS",
      "Developed auto-complete search which adds the course to the table using JQuery",
      "Developed a course table that calculates ECTS and more using JavaScript",
    ],
    outcome:
      "Grade 5 from Standards in the application of Internet technology course",
  },
  {
    title: "Java desktop application",
    date: "07/2022",
    skils: "Java, SQL",
    task: [
      "Installed JAXB (Java XML Binding) utilities for models",
      "Examined and upgraded RSS Parser for project purpose",
      "Implement Data Source Singleton and Repository Factory pattern",
      "Organized JFrame panels for admin and public part of application",
    ],
    outcome: "Grade 4 from the Java 1 course",
  },
  {
    title: "Library webshop | Group project",
    date: "07/2022",
    skils:
      "HTML, CSS, JavaScript, C# .NET Framework, MS SQL, communication skills.",
    task: [
      "Group project of 4 students",
      "Organized Azure DevOps: Sprints & Work Items (Epics, Tasks, User stories and test cases)",
      "Architected software structure using MVC pattern",
    ],
    outcome: "Grade 5 from the project application development course",
  },
  {
    title: "Apartment agency web-application",
    date: "09/2022",
    skils: "HTML, CSS, JavaScript, C# .NET Framework, MVC, Web Forms, MS SQL",
    task: [
      "Designed and built Web Form administrative part of application",
      "Solved picture upload to MS SQL database problem",
      "Designed and built public MVC part of application",
      "Implemented Cookie and Session user data saving and life cycle",
    ],
    outcome: "Grade 4 from web application development course",
  },
];

// advanced = 💪, intermediate = 👍, beginner = 👶

export default function App() {
  return (
    <div>
      <h1>My CV page in React framework</h1>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          {}
          <SkillList />
        </div>
      </div>
      <Hobbies data={hobbies} />
      <Projects data={projects} />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="cvPagePic.jpg" alt="Karla Axmann" />;
}

function Intro() {
  return (
    <div>
      <h1 className="name">Karla Axmann</h1>
      <p>
        At young age started looking at my dad's computer with black screen and
        colorful words. After few years I wanted to try for myself. He gave me
        Udemy course and I made my first web page. Years after I still have
        passion for colorful words in front-end development. That passion has
        only been spreading to back-end with support of my university. My wish
        is to transfer my knowledge into real life problems in Croatian or firms
        abroad.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p style={{ backgroundColor: color }}>{skill}</p>
      <p style={{ backgroundColor: color }}>
        {level === "beginner" && "👶"}
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
      </p>
    </div>
  );
}

function Projects({ data }) {
  return (
    <div>
      <h2>My project</h2>
      <div className="accordion">
        {data.map((el, i) => (
          <OneProject
            title={el.title}
            date={el.date}
            skills={el.skills}
            task={el.task}
            outcome={el.outcome}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

function OneProject({ title, date, skills, task, outcome }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`item-project ${isOpen ? "open-project" : ""}`}
      onClick={handleToggle}
    >
      {/* <p className="number">{num}</p> */}
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && (
        <div className="content-box">
          <p className="date">{date}</p>
          <p>{skills}</p>
          <ul>
            {task.map((taskic, index) => (
              <li key={index}>{taskic}</li>
            ))}
          </ul>
          <p className="outcome">Outcome: {outcome}</p>
        </div>
      )}
    </div>
  );
}

function Hobbies({ data }) {
  return (
    <div>
      <h2>My hobbies </h2>
      <div className="accordion">
        {data.map((el, i) => (
          <HobbyItem
            title={el.title}
            text={el.text}
            num={i + 1}
            key={el.title}
          />
        ))}
      </div>
    </div>
  );
}

function HobbyItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
