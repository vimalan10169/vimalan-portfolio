import React, { useEffect } from 'react';
import img1 from './assets/1704376191890.jpg';

// Import social icons
import wpIcon from './assets/wp.png';
import instaIcon from './assets/insta.png';
import fbIcon from './assets/fb.png';
import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';

function Index() {
  // Scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const handleScroll = () => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">VIMALAN S</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto gap-3">
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#skills">Skills</a></li>
              <li><a className="nav-link" href="#internship">Internship</a></li>
              <li><a className="nav-link" href="#projects">Projects</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
              <li><a className="btn btn-talk" href="#contact">Let's Talk</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 reveal">
              <h5 className="text-muted">Hey! I am</h5>
              <h1 id="typing">Front-End Developer</h1>
              <p>
                I am a passionate and detail-oriented Front-End Developer with strong expertise in HTML, CSS, JavaScript, and React.js,
                complemented by back-end proficiency in Python, MySQL, and Django.
              </p>
              <a href="#projects" className="btn btn-success me-2">View Work</a>
              <a href="mailto:vimalan10169@gmail.com" className="btn btn-outline-success">Hire Me</a>
            </div>
            <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0 reveal">
              <div className="profile-wrap">
                <img src={img1} alt="Profile picture of Vimal" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white reveal" id="about">
        <div className="container text-center">
          <h2 className="section-title">About Me</h2>
          <p className="mt-3">
            Computer Science graduate passionate about building responsive web applications and interactive user experiences.
            Skilled in HTML, CSS, Bootstrap, JavaScript, Python, and Django with hands-on internship experience.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="container">
          <h2 className="section-title text-center">Skills</h2>
          <div className="row mt-4">
            {["HTML","CSS","Bootstrap","JavaScript","React","Python","Django","SQL"].map(skill => (
              <div className="col-md-3 mt-2" key={skill}>
                <div className="card p-3 text-center">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="section bg-white reveal" id="internship">
        <div className="container">
          <h2 className="section-title text-center">Internship</h2>
          <div className="row mt-4 g-4">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h5 className="text-success">Web Developer Intern</h5>
                <p className="text-muted">Dec-2024 to Mar-2025</p>
                <ul>
                  <li>HTML, CSS, Bootstrap, JavaScript</li>
                  <li>Responsive UI components</li>
                  <li>Debugging & optimization</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h5 className="text-success">Python Fullstack Intern</h5>
                <p className="text-muted">Sep-2025 to Feb-2026</p>
                <ul>
                  <li>Frontend + Backend integration</li>
                  <li>Reusable components</li>
                  <li>Problem-solving skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section reveal" id="projects">
        <div className="container">
          <h2 className="section-title text-center">Projects</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card p-3 text-center bg-success text-white">
                <h5>Portfolio Website</h5>
                <p>Animated personal portfolio</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 text-center bg-success text-white">
                <h5>Organic Farming</h5>
                <p>Frontend dashboard</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 text-center bg-success text-white">
                <h5>Weather App</h5>
                <p>API-based application</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container text-center">
          <h2>Contact Me</h2>
          <p>✉ <a href="mailto:vimalan10169@gmail.com">vimalan10169@gmail.com</a></p>
          <p>📞 +91 97919 80514</p>
          <p>📍 Ramanathapuram</p>
          <div className="social-icons d-flex justify-content-center gap-3">
            <a href="https://wa.me/919791980514"><img src={wpIcon} alt="WhatsApp" height="30" /></a>
            <a href="https://www.instagram.com/_tnteddy/"><img src={instaIcon} alt="Instagram" height="30" /></a>
            <a href="https://www.facebook.com/share/17imnpk3vk/"><img src={fbIcon} alt="Facebook" height="30" /></a>
            <a href="https://github.com/vimalan10169"><img src={githubIcon} alt="GitHub" height="30" /></a>
            <a href="https://www.linkedin.com/in/vimalan-s-66974029a/"><img src={linkedinIcon} alt="LinkedIn" height="30" /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-4">
        <p><b>© 2026 | Vimalan Portfolio | Developed by Vimal Jii</b></p>
      </footer>
    </div>
  );
}

export default Index;
