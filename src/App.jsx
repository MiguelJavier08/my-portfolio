import { useState } from "react";

const NAV_LINKS = ["Home", "About", "Projects", "Contact"];

const INFO = {
  name: "Miguel Javier",
  greeting: "Hello, I'm Miguel",
  course: "BS Information Technology",
  year: "3rd Year College Student",
  location: "Barangay 5, Balayan, Batangas, Philippines",
  photo: "/migz.jpg",
};

const SKILLS = ["HTML & CSS", "JavaScript", "React", "Data Analysis", "MySQL Database"];

const PROJECTS = [
  {
    title: "Ely's Water Website",
    type: "Website",
    description:
      "A responsive website for a water refilling business with a modern landing page, product listings, and user login/register for online ordering and free gallon delivery.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "Python", "Flask"],
    image: "/website.webp",
    
    
  },
  {
    title: "Gawin Desktop App",
    type: "Desktop Application",
    description:
      "A UI design for a desktop task manager with a list sidebar, daily progress tracking, and a task details panel.",
    tech: ["UI Design", "Python", "Tkinter"],
    image: "/gawin.png",
    
    
  },
  {
    title: "Student Directory",
    type: "Website",
    description:
      "A responsive student directory. Enter a student's name and program, view everyone as cards, and remove entries with a single click.",
    tech: ["React", "CSS", "JavaScript"],
    image: "/student.png",
    
    
  },
];

const CONTACTS = [
  {
    label: "Email",
    value: "javiermigueljustin@gmail.com",
    href: "mailto:javiermigueljustin@gmail.com",
    icon: "mail",
  },
  {
    label: "GitHub",
    value: "MiguelJavier08",
    href: "https://github.com/MiguelJavier08",
    icon: "github",
  },
  {
    label: "Facebook",
    value: "miguel.javier.311438",
    href: "https://www.facebook.com/miguel.javier.311438",
    icon: "facebook",
  },
];

function Icon({ name }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  };
  if (name === "mail")
    return (
      <svg {...props}>
        <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.6 7H4v.4l8 5.2 8-5.2V7h-.6L12 12.2Z" />
      </svg>
    );
  if (name === "github")
    return (
      <svg {...props}>
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  return (
    <svg {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function Navbar({ page, setPage }) {
  return (
    <nav className="navbar">
      <h1 className="logo">MIGZ</h1>
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              className={page === link ? "active" : ""}
              aria-current={page === link ? "page" : undefined}
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

function Home({ setPage }) {
  return (
    <section className="home">
      <div className="home-text">
        <p className="greeting">Welcome to my portfolio</p>
        <h2>{INFO.greeting}</h2>
        <p className="tagline">
          BS Information Technology student and aspiring web developer.
        </p>
        <p className="lead">
          I'm passionate about technology, programming, and creating useful
          digital solutions. I'm continuously learning web development and
          building websites and applications that solve real-world problems.
        </p>
        <div className="cta">
          <button className="btn primary" onClick={() => setPage("Projects")}>
            View my projects
          </button>
          <button className="btn secondary" onClick={() => setPage("Contact")}>
            Contact me
          </button>
        </div>
        <ul className="chips">
          {SKILLS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
      <div className="photo-wrap">
        <img className="profile-pic" src={INFO.photo} alt={INFO.name} />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <h2>About me</h2>
      <p className="subtitle">A quick look at who I am and what I work with.</p>

      <div className="about-grid">
        <div className="card">
          <h3>Personal information</h3>
          <dl className="info-list">
            <div>
              <dt>Full name</dt>
              <dd>{INFO.name}</dd>
            </div>
            <div>
              <dt>Course</dt>
              <dd>{INFO.course}</dd>
            </div>
            <div>
              <dt>Year level</dt>
              <dd>{INFO.year}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{INFO.location}</dd>
            </div>
          </dl>
        </div>

        <div className="card">
          <h3>Who I am</h3>
          <p>
            I'm an IT-minded college student who enjoys learning about
            information technology, web development, and data analysis. I love
            working with computers, building websites, and exploring how
            technology can organize data and solve real-world problems. I'm
            always improving my skills and creating projects that make everyday
            tasks easier.
          </p>
        </div>
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
      <h2>My projects</h2>
      <p className="subtitle">
        Websites, applications, and school projects I've built.
      </p>
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <article className="project-card" key={p.title}>
            <img src={p.image} alt={p.title} />
            <div className="project-body">
              <span className="badge">{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tech-list">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(p.github || p.demo) && (
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      Live demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <h2>Contact me</h2>
      <p className="subtitle">
        Open to internships, projects, and collaboration. Reach out anytime.
      </p>
      <div className="contact-grid">
        {CONTACTS.map((c) => (
          <a
            className="contact-card"
            key={c.label}
            href={c.href}
            target={c.icon === "mail" ? undefined : "_blank"}
            rel="noreferrer"
          >
            <span className="contact-icon">
              <Icon name={c.icon} />
            </span>
            <span className="contact-text">
              <strong>{c.label}</strong>
              <span>{c.value}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");

  const goTo = (p) => {
    setPage(p);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Navbar page={page} setPage={goTo} />
      <main key={page}>
        {page === "Home" && <Home setPage={goTo} />}
        {page === "About" && <About />}
        {page === "Projects" && <Projects />}
        {page === "Contact" && <Contact />}
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {INFO.name}. All rights reserved.
      </footer>
    </>
  );
}