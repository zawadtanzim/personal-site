import React from 'react';

const Projects = () => (
  <section id="projects" className="section">
  <h2>Projects</h2>
    <div className="grid">
  <a className="card" href="https://github.com/zawadtanzim/g-LIST" aria-label="Grocery Buddy project" target="_blank" rel="noopener noreferrer">
        <div className="kicker">Full-stack • React • Node/Express • PostgreSQL</div>
        <h3>Grocery Buddy</h3>
        <p>Collaborative grocery list app with real-time group management, invitations, and instant updates using Socket.IO.</p>
        <div className="meta">
          <span className="badge">React</span>
          <span className="badge">Node.js</span>
          <span className="badge">Express</span>
          <span className="badge">Prisma</span>
          <span className="badge">Supabase</span>
          <span className="badge">Socket.IO</span>
        </div>
        <span className="arrow">↗</span>
      </a>
  <a className="card" href="https://github.com/zawadtanzim/MovieMate" aria-label="Movie Mate project" target="_blank" rel="noopener noreferrer">
        <div className="kicker">Frontend • React • Movie API</div>
        <h3>Movie Mate</h3>
        <p>Responsive movie app with real-time data, favorites, and global state management via React Context API.</p>
        <div className="meta">
          <span className="badge">React</span>
          <span className="badge">API Integration</span>
          <span className="badge">Context API</span>
          <span className="badge">Custom CSS</span>
        </div>
        <span className="arrow">↗</span>
      </a>
      <a className="card" href="https://github.com/zawadtanzim/weather-app" aria-label="Weather App project" target="_blank" rel="noopener noreferrer">
        <div className="kicker">Frontend • React • OpenWeather API</div>
        <h3>Weather App</h3>
        <p>Weather dashboard app fetching real-time weather data using the OpenWeather API. Features search, responsive UI, and error handling.</p>
        <div className="meta">
          <span className="badge">React</span>
          <span className="badge">API Integration</span>
          <span className="badge">OpenWeather</span>
        </div>
        <span className="arrow">↗</span>
      </a>
      <a className="card" href="https://github.com/zawadtanzim/dsa-basics" aria-label="DSA Basics project" target="_blank" rel="noopener noreferrer">
        <div className="kicker">Learning • Algorithms • Data Structures</div>
        <h3>DSA Basics</h3>
        <p>Collection of fundamental data structure and algorithm implementations in JavaScript. Built for learning and interview prep.</p>
        <div className="meta">
          <span className="badge">JavaScript</span>
          <span className="badge">Algorithms</span>
          <span className="badge">Data Structures</span>
        </div>
        <span className="arrow">↗</span>
      </a>
    </div>
  </section>
);

export default Projects;
