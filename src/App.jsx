import './App.css'
import projects from './data/projects'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">
            <span>AR</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk 👋
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="welcome-badge">
              👋 Hello, I'm
            </div>

            <h1>
              Mochammad
              <span> Abdurobby</span>
            </h1>

            <h2>
              IT Staff · Web Application Developer · System Administrator (FreeBSD)
            </h2>

            <p className="hero-description">
              IT Staff with more than 8 years of experience in web application
              development, server administration, and IT infrastructure support.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View My Work →
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <strong>8+</strong>
                <span>Years Experience</span>
              </div>

              <div className="stat">
                <strong>6+</strong>
                <span>Major Projects</span>
              </div>

              <div className="stat">
                <strong>∞</strong>
                <span>Curiosity</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-decoration decoration-one"></div>
              <div className="profile-decoration decoration-two"></div>

              <div className="profile-avatar">
                AR
              </div>

              <div className="profile-info">
                <h3>Mochammad Abdurobby</h3>
                <p>IT Professional</p>
              </div>

              <div className="profile-tags">
                <span>Laravel</span>
                <span>React</span>
                <span>FreeBSD</span>
              </div>
            </div>

            <div className="floating-card card-code">
              💻 Web Developer
            </div>

            <div className="floating-card card-server">
              🖥️ System Admin
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-heading">
            <span>01 — ABOUT ME</span>
            <h2>
              Technology should make
              <strong> things better.</strong>
            </h2>
          </div>

          <div className="about-content">
            <p>
              I am an IT Staff with more than 8 years of experience in web
              application development, server administration, and IT
              infrastructure support.
            </p>

            <p>
              I have experience building and maintaining web applications using
              PHP Native, Laravel, and CodeIgniter, as well as managing Microsoft
              SQL Server and MySQL databases.
            </p>

            <p>
              My experience also includes FreeBSD server administration,
              Apache HTTP Server, PHP-FPM, Redis, MQTT, SSH, and PF Firewall.
              I am also experienced in troubleshooting applications, servers,
              networks, hardware, and software to support business operations.
            </p>
          </div>
        </div>
      </section>
      {/* What I Do */}
      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <span>02 — WHAT I DO</span>

            <h2>
              From code to
              <strong> production.</strong>
            </h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01</div>

              <h3>Web Development</h3>

              <p>
                Developing and maintaining internal web applications using PHP
                Native, Laravel, and CodeIgniter.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">02</div>

              <h3>Server Administration</h3>

              <p>
                Installing, configuring, and maintaining FreeBSD servers and
                services used to support business applications.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">03</div>

              <h3>System Integration</h3>

              <p>
                Integrating applications with databases, IoT devices, MQTT,
                APIs, and other business systems.
              </p>
            </div>

            <div className="service-card">
              <div className="service-number">04</div>

              <h3>IT Support & Troubleshooting</h3>

              <p>
                Troubleshooting applications, servers, networks, computers,
                printers, scanners, and other IT infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-heading">
            <span>03 — EXPERIENCE</span>

            <h2>
              More than 8 years
              <strong> in IT.</strong>
            </h2>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>IT Staff</h3>

                <p className="experience-company">
                  Current Company
                </p>
              </div>

              <span className="experience-period">
                July 2018 — Present
              </span>
            </div>

            <div className="experience-content">
              <p>
                Responsible for web application development, server
                administration, IT infrastructure support, and technical
                troubleshooting to support business operations.
              </p>

              <div className="experience-responsibilities">
                <div>
                  <span>01</span>
                  <p>
                    Develop and maintain internal web applications using PHP
                    Native, Laravel, and CodeIgniter.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    Analyze user requirements and develop new features based
                    on operational needs.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    Deploy applications using Git and maintain application
                    environments.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <p>
                    Install, configure, and maintain FreeBSD servers and
                    supporting services.
                  </p>
                </div>

                <div>
                  <span>05</span>
                  <p>
                    Manage Apache HTTP Server, PHP-FPM, Redis, MQTT, SSH,
                    and PF Firewall.
                  </p>
                </div>

                <div>
                  <span>06</span>
                  <p>
                    Provide technical support for computers, printers,
                    scanners, barcode scanners, networks, and users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-heading">
            <span>02 — MY SKILLS</span>
            <h2>
              What I use to
              <strong> build.</strong>
            </h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card blue-card">
              <div className="skill-icon">💻</div>

              <h3>Web Development</h3>

              <p>
                Building full-stack web applications from frontend to backend.
              </p>

              <div className="skill-tags">
                <span>PHP</span>
                <span>Laravel</span>
                <span>CodeIgniter</span>
                <span>React.js</span>
                <span>JavaScript</span>
              </div>
            </div>

            <div className="skill-card yellow-card">
              <div className="skill-icon">🗄️</div>

              <h3>Database & Backend</h3>

              <p>
                Designing, managing, and integrating database systems and APIs.
              </p>

              <div className="skill-tags">
                <span>SQL Server</span>
                <span>MySQL</span>
                <span>SQLite</span>
                <span>REST API</span>
              </div>
            </div>

            <div className="skill-card purple-card">
              <div className="skill-icon">🖥️</div>

              <h3>Server & Infrastructure</h3>

              <p>
                Building, configuring, and maintaining production server environments.
              </p>

              <div className="skill-tags">
                <span>FreeBSD</span>
                <span>Linux</span>
                <span>Apache</span>
                <span>Nginx</span>
                <span>Redis</span>
              </div>
            </div>

            <div className="skill-card green-card">
              <div className="skill-icon">🔗</div>

              <h3>System Integration</h3>

              <p>
                Connecting applications with devices, APIs, and business systems.
              </p>

              <div className="skill-tags">
                <span>MQTT</span>
                <span>IoT</span>
                <span>ZKTeco</span>
                <span>Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-heading">
            <span>03 — SELECTED PROJECTS</span>
            <h2>
              Things I've
              <strong> built.</strong>
            </h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  {project.icon}
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {project.categoryLabel}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container contact-content">
          <div className="contact-emoji">🚀</div>

          <span>04 — LET'S CONNECT</span>

          <h2>
            Have a project
            <strong> in mind?</strong>
          </h2>

          <p>
            I am open to opportunities in IT, web application development,
            and system administration.
          </p>

          <a
            href="mailto:abdurobby5@gmail.com"
            className="btn-primary"
          >
            Let's Talk →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 Mochammad Abdurobby</p>

          <p>
            Built with React.js ⚛️
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App