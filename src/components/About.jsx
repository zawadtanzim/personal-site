import React from 'react';

const About = () => (
  <section id="about" className="section">
    <div className="two-col">
  <div className="panel">
        <h2>About</h2>
  <p>I'm a full-stack developer with a passion for solving real-world problems through clean, efficient systems. I build web applications using Node.js, Express, and Prisma, and work with relational databases like SQLite and Postgres.</p>
  <p>As a first-generation immigrant, my journey into tech has been fueled by resilience, curiosity, and the drive to create opportunities not only for myself but also for under-resourced communities. Through The Knowledge House Innovation Fellowship, I continue to refine my skills by working on hands-on projects and collaborating with other developers.</p>
        <div className="meta" style={{marginTop:12, display:'flex', gap:8, flexWrap:'wrap'}}>
          <span className="badge">JavaScript</span>
          <span className="badge">React</span>
          <span className="badge">Node.js</span>
          <span className="badge">Express</span>
          <span className="badge">Prisma</span>
          <span className="badge">Supabase</span>
          <span className="badge">SQL</span>
          <span className="badge">Testing</span>
        </div>
      </div>
  <div className="panel">
        <h2>Quick Facts</h2>
        <div className="list">
          <div className="row"><span>Location</span><strong>NYC</strong></div>
          <div className="row"><span>Open to</span><strong>Learning new tech</strong></div>
          <div className="row"><span>Loves</span><strong>Cats, Anime</strong></div>
          <div className="row"><span>Learning</span><strong>Python</strong></div>
          <div className="row"><span>Contact</span><strong><a className="link" href="#contact">Say hi ↘</a></strong></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
