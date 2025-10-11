
import './App.css';

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <img src="/46-2.jpg" alt="Profile" />
        <h1>Jaeryung Chung</h1>
        <p>jhyun513@kaist.ac.kr</p>
        <p>Master's student in KAIST</p>
      </aside>
      <main className="main-content">
        <nav className="navbar">
          <a href="#about">About Me</a>
          <a href="#publications">Publications</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>
        <section id="about">
          <h2>About Me</h2>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/KyVi9_0TCCE?si=6H3_3T8zNf8orJX5"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p>Introduction of me</p>
        </section>
        <section id="publications">
          <h2>Publications</h2>
          <ul>
            <li>
              <a href="https://dl.acm.org/doi/10.1145/3706599.3719932" target="_blank" rel="noopener noreferrer">
                WrightHere: Supporting Children's Creative Writing with AI-Infused Interactive 3D Environment
              </a>
            </li>
          </ul>
        </section>
        <section id="news">
          <h2>News</h2>
          <ul>
            <li>CHI2025 Yokohama - poster presentation</li>
            <li>SIGGRAPH Vancouver</li>
            <li>UbiComp Helsinki</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <div className="contact-info">
            <p>
              <a href="/cv-20251011.pdf" target="_blank" rel="noopener noreferrer">
                CV download
              </a>
            </p>
            <p>Email: jhyun513@kaist.ac.kr</p>
            <p>Contact: +82 10-5280-8469</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

