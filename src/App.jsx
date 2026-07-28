import { useState } from 'react'
import './App.css'
import projects from './data/projects'

function App() {
  const [activeProject, setActiveProject] = useState(null)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-container">

          <a
            href="#top"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="logo-mark">MA</span>
            <span className="logo-text">Mochammad Abdurobby</span>
          </a>

          <div className="nav-links">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              About
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact
            </a>

            <a
              href="/CV-Mochammad-Abdurobby.pdf"
              className="btn btn-primary"
              download
            >
              Download CV
            </a>
          </div>

        </div>
      </nav>


      {/* ================= MAIN ================= */}
      <main id="top">

        {/* ================= HERO ================= */}
        <section className="hero-section">

          <div className="hero-content">

            <p className="hero-eyebrow">
              IT · WEB · SYSTEMS · IOT
            </p>

            <h1>
              I build systems
              <span> that make business operations work better.</span>
            </h1>

            <p className="hero-description">
              A showcase of web applications, warehouse systems,
              IoT monitoring platforms, and business solutions
              developed for real-world operations.
            </p>

            <div className="hero-actions">

              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Explore Projects
                <span>→</span>
              </button>

              <a
                href="/CV-Mochammad-Abdurobby.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>

            </div>

          </div>

          <div className="hero-visual">

            <div className="hero-card">

              <div className="hero-card-header">
                <span className="status-dot"></span>
                <span>Systems I Build</span>
              </div>

              <div className="system-flow">

                <div className="flow-item">
                  <span className="flow-icon">🌐</span>
                  <span>Web Applications</span>
                </div>

                <div className="flow-line"></div>

                <div className="flow-item">
                  <span className="flow-icon">📱</span>
                  <span>Mobile & Scanner</span>
                </div>

                <div className="flow-line"></div>

                <div className="flow-item">
                  <span className="flow-icon">⚙️</span>
                  <span>IoT & Monitoring</span>
                </div>

                <div className="flow-line"></div>

                <div className="flow-item">
                  <span className="flow-icon">🖥️</span>
                  <span>Infrastructure</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}
        <section id="projects" className="projects-section">

          <div className="section-header">

            <div>
              <span className="section-label">
                Selected Work
              </span>

              <h2>
                Projects I Have Built
              </h2>
            </div>

            <p>
              A collection of systems and applications
              developed for real-world business operations.
            </p>

          </div>


          <div className="projects-grid">

            {projects.map((project) => (

              <article
                key={project.id}
                className="project-card"
                onClick={() => setActiveProject(project)}
              >

                <div className="project-image">

                  {project.images?.length > 0 ? (

                      <img
                        src={project.images[0]}
                        alt={project.title}
                      />

                    ) : (

                    <div className="project-placeholder">

                      <span className="project-icon">
                        {project.icon}
                      </span>

                      <span className="placeholder-label">
                        Project Preview
                      </span>

                    </div>

                  )}

                  <div className="project-overlay">
                    <span>
                      View Project →
                    </span>
                  </div>

                </div>


                <div className="project-content">

                  <div className="project-meta">

                    <span className="project-category">
                      {project.categoryLabel}
                    </span>

                    <span className="project-number">
                      0{project.id}
                    </span>

                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>


                  <div className="project-tech">

                    {project.technologies.map((tech) => (

                      <span key={tech}>
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ================= ABOUT ================= */}
        <section id="about" className="about-section">

          <div className="about-container">

            <div className="section-header">

              <span className="section-label">
                About
              </span>

              <h2>
                Building systems for real-world operations.
              </h2>

            </div>


            <div className="about-content">

              <p>
                I design and develop practical software systems for real-world
                business operations. My work includes web applications, warehouse
                and scanning systems, IoT monitoring platforms, workflow systems,
                and infrastructure solutions.
              </p>


              <a
                href="/CV-Mochammad-Abdurobby.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
                <span>→</span>
              </a>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section">

        <div className="contact-container">

          <span className="section-label">
            Get In Touch
          </span>

          <h2>
            Let's build something useful.
          </h2>

          <p>
            Interested in discussing a project, collaboration,
            or a software solution for your business?
          </p>

          <a
            href="mailto:abdurobby5@gmail.com"
            className="btn btn-primary"
          >
            Contact Me
            <span>→</span>
          </a>

        </div>

      </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <span className="logo-mark">
              MA
            </span>

            <span>
              Mochammad Abdurobby
            </span>

          </div>


          <div className="footer-links">

            <a
              href="https://github.com/robby55"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mochammad-abdurobby/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="mailto:abdurobby5@gmail.com"
            >
              Email
            </a>

          </div>


          <p className="copyright">
            © {new Date().getFullYear()} Mochammad Abdurobby.
            All rights reserved.
          </p>

        </div>

      </footer>


      {/* ================= PROJECT MODAL ================= */}
      {activeProject && (

        <div
          className="project-modal"
          onClick={() => setActiveProject(null)}
        >

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>


            <div className="modal-image">

              {activeProject.images?.length > 0 ? (

                <div className="modal-images">
                  {activeProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${activeProject.title} ${index + 1}`}
                    />
                  ))}
                </div>

              ) : (

                <span>
                  {activeProject.icon}
                </span>

              )}

            </div>


            <div className="modal-body">

              <span className="section-label">
                {activeProject.categoryLabel}
              </span>

              <h2>
                {activeProject.title}
              </h2>

              <p>
                {activeProject.description}
              </p>

              {activeProject.features && (
                <div className="modal-features">

                  <h3>Key Features</h3>

                  <ul>
                    {activeProject.features.map((feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>

                </div>
              )}

              <div className="modal-technologies">

                {activeProject.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  View Live Website →
                </a>
              )}

            </div>

          </div>

        </div>

      )}

    </div>
  )
}

export default App