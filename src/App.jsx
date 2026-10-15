import { useState } from "react";

const NAV_LINKS = ["Home", "About", "Projects", "Contact"];

const INFO = {
  name: "Hello I'm Miguel ",
  course: "BS Information Technology",
  year: "I'm a 3rd Year College Student",
  location: "Barangay 5, Balayan, Batangas, Philippines",
  photo: "/migz.jpg", 
};

const SKILLS = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Data Analysis",
  "MYSQL Database",
];

const PROJECTS = [
  {
    title: "",
    type: "Website",
    description: "",
    image: "/project-placeholder.svg",
  },
  {
    title: "",
    type: "Application",
    description: "",
    image: "/project-placeholder.svg",
  },
  {
    title: "",
    type: "School Project",
    description: "",
    image: "/project-placeholder.svg",
  },
];

const CONTACTS = {
  email: "javiermigueljustin@gmail.com",
  github: "https://github.com/MiguelJavier08",
  facebook: "https://www.facebook.com/miguel.javier.311438",
};


function Navbar({ page, setPage }) {
  return (
    <nav className="navbar">
      <h1 className="logo">MIGZ</h1>
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              className={page === link ? "active" : ""}
              onClick={() => setPage(link)}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <p className="greeting">Hello, welcome to my portfolio!</p>
        <h2>{INFO.name}</h2>
        <p className="tagline">
          I'm a BS Information Technology Student and Aspiring Web Developer.
        </p>
        <p>
          I am passionate about technology, programming, and creating useful digital solutions. 
          I am continuously learning web development and exploring different technologies to improve 
          my coding skills and build websites and applications that solve real-world problems.
        </p>
      </div>
      <img className="profile-pic" src={INFO.photo} alt={INFO.name} />
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <h2>About Me</h2>

      <div className="card">
        <h3>Personal Information</h3>
        <ul className="info-list">
          <li>
            <strong>Full Name:</strong> {INFO.name}
          </li>
          <li>
            <strong>Course:</strong> {INFO.course}
          </li>
          <li>
            <strong>Year Level:</strong> {INFO.year}
          </li>
          <li>
            <strong>Location:</strong> {INFO.location}
          </li>
        </ul>
      </div>

      <div className="card">
        <h3>Who I Am</h3>
        <p>
          I am an IT-minded college student who enjoys learning about
          information technology, web development, and data analysis. I love
          working with computers, building websites, and exploring how
          technology can be used to organize data and solve real-world
          problems. I am always improving my skills and creating projects that
          make everyday tasks easier.
        </p>
      </div>

      <div className="card">
        <h3>Skills</h3>
        <ul className="skills-list">
          {SKILLS.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="page">
      <h2>My Projects</h2>
      <p className="subtitle">
        Mga website, applications, at school projects na nagawa ko.
      </p>
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.title}>
            <img src={p.image} alt={p.title} />
            <div className="project-body">
              <span className="badge">{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <h2>Contact Me</h2>
      <p className="subtitle">Feel free to reach out through these links.</p>
      <div className="card">
        <ul className="info-list">
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a href={CONTACTS.github} target="_blank" rel="noreferrer">
              {CONTACTS.github}
            </a>
          </li>
          <li>
            <strong>Facebook:</strong>{" "}
            <a href={CONTACTS.facebook} target="_blank" rel="noreferrer">
              {CONTACTS.facebook}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      <main>
        {page === "Home" && <Home />}
        {page === "About" && <About />}
        {page === "Projects" && <Projects />}
        {page === "Contact" && <Contact />}
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {INFO.name}
      </footer>
    </>
  );
}