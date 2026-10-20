 const technologies = [
  { name: "Java", type: "Backend" },
  { name: "Spring Boot", type: "Backend" },
  { name: "MySQL", type: "Database" },
  { name: "React", type: "Frontend" },
  { name: "Next.js", type: "Frontend" },
  { name: "Git & GitHub", type: "Tools" },
];

const projects = [
  {
    number: "01",
    name: "Uber Clone",
    category: "BACKEND ENGINEERING",
    description:
      "Exploring the architecture behind a ride-booking platform, from API design to core application workflows.",
    stack: ["Java", "Spring Boot", "SQL"],
    status: "IN PROGRESS",
    symbol: "↗",
  },
  {
    number: "02",
    name: "DevConnect",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A developer-focused social platform built around users, posts, comments, and social connections.",
    stack: ["Java", "Spring Boot", "MySQL"],
    status: "IN PROGRESS",
    symbol: "⌘",
  },
  {
    number: "03",
    name: "Spam Email Detector",
    category: "APPLICATION DEVELOPMENT",
    description:
      "An application exploring spam email detection workflows and email-related data management.",
    stack: ["Java", "Spring Boot", "MySQL"],
    status: "PERSONAL PROJECT",
    symbol: "✳",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#">
          <span className="logo-mark">D</span>
          <span className="logo-name">developer<span>.</span></span>
        </a>

        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#stack">Stack</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="resume-link"
  >
    Resume <span>↗️</span>
  </a>

  <a href="#contact" className="nav-cta">
    Let&apos;s talk <span>↗️</span>
  </a>
</div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            JAVA / SPRING BOOT DEVELOPER
          </div>

          <p className="hero-kicker">THINK. BUILD. IMPROVE.</p>

          <h1>
            Turning ideas
            <br />
            into <span>working</span>
            <br />
            software.
          </h1>

          <p className="description">
            I&apos;m a computer science student focused on backend
            engineering, REST APIs, and building useful full-stack
            applications with Java and Spring Boot.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              Explore my work <span>↗</span>
            </a>
            <a href="#about" className="secondary-btn">
              A little about me
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN INDIA</span>
            <span>JAVA · SPRING BOOT · SQL</span>
          </div>
        </div>

        <div className="code-panel">
          <div className="code-window-bar">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <span>developer.java</span>
            <span className="window-language">JAVA</span>
          </div>

          <div className="code-content">
            <p><span className="code-muted">01</span> <span className="code-purple">public class</span> <span className="code-blue">Developer</span> {"{"}</p>
            <p><span className="code-muted">02</span> &nbsp; <span className="code-purple">private final</span> String focus =</p>
            <p><span className="code-muted">03</span> &nbsp; &nbsp; <span className="code-green">&quot;Backend Engineering&quot;</span>;</p>
            <p><span className="code-muted">04</span></p>
            <p><span className="code-muted">05</span> &nbsp; String[] tools = {"{"}</p>
 <p><span className="code-muted">06</span> &nbsp; &nbsp; <span className="code-green">&quot;Java&quot;</span>, <span className="code-green">&quot;Spring Boot&quot;</span>,</p>
            <p><span className="code-muted">07</span> &nbsp; &nbsp; <span className="code-green">&quot;SQL&quot;</span>, <span className="code-green">&quot;REST APIs&quot;</span></p>
            <p><span className="code-muted">08</span> &nbsp; {"};"}</p>
            <p><span className="code-muted">09</span></p>
            <p><span className="code-muted">10</span> &nbsp; <span className="code-purple">void</span> <span className="code-blue">keepBuilding</span>() {"{"}</p>
            <p><span className="code-muted">11</span> &nbsp; &nbsp; learn();</p>
            <p><span className="code-muted">12</span> &nbsp; &nbsp; build();</p>
            <p><span className="code-muted">13</span> &nbsp; {"}"}</p>
            <p><span className="code-muted">14</span> {"}"}</p>
          </div>

          <div className="code-window-footer">
            <span><span className="status-dot" /> Available for opportunities</span>
            <span>UTF-8</span>
          </div>

          <div className="floating-note">
            <span>✳</span>
            Always learning.
            <br />
            Always building.
          </div>
        </div>
      </section>

      <section id="stack" className="section stack-section">
        <div className="section-intro">
          <p className="eyebrow">THE TOOLBOX</p>
          <h2>Technologies I work with.</h2>
          <p className="section-description">
            The tools I use to turn ideas into applications.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <div className="tech-item" key={tech.name}>
              <span className="tech-symbol">{"</>"}</span>
              <div>
                <h3>{tech.name}</h3>
                <p>{tech.type}</p>
              </div>
              <span className="tech-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Built through curiosity.</h2>
          </div>
          <span className="section-index">01 — 03</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual">
                <span className="project-visual-number">
                  PROJECT / {project.number}
                </span>
                <span className="project-symbol">{project.symbol}</span>
                <span className="project-visual-label">
                  {project.category}
                </span>
              </div>

              <div className="project-details">
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <span className="project-status">{project.status}</span>
                </div>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about-section">
        <div>
          <p className="eyebrow">BEHIND THE CODE</p>
          <h2>
            Not just writing code.
            <br />
            <span>Learning how it works.</span>
          </h2>
        </div>
 <div className="about-copy">
          <p>
            I&apos;m a computer science student who enjoys understanding
            what happens behind the scenes: how APIs communicate,
            how databases are designed, and how software systems fit
            together.
          </p>
          <p>
            My current focus is strengthening my Java backend skills,
            building real projects, and improving my problem-solving
            abilities one step at a time.
          </p>
          <a className="text-link" href="#contact">
            More about me <span>↗</span>
          </a>
        </div>
      </section>

      <footer id="contact" className="footer">
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
        <h2>Let&apos;s build something useful.</h2>
        <p className="footer-description">
          Open to connecting with developers, learning from others,
          and exploring interesting opportunities.
        </p>

        <div className="footer-bottom">
          <a className="logo" href="#">
            <span className="logo-mark">D</span>
            <span className="logo-name">developer<span>.</span></span>
          </a>

          <p>Designed & built with Next.js · © 2026</p>
        </div>
      </footer>
    </main>
  );
}