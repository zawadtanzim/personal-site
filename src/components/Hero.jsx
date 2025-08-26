import React from 'react';

const Hero = () => (
  <header className="hero container" id="intro">
  <span className="tag"><span className="pulse" aria-hidden="true"></span> Open to Opportunities</span>
    <h1 className="headline">I build scalable, user-focused <span style={{background: 'linear-gradient(135deg,var(--brand),var(--brand-2))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>web apps</span> & pragmatic UIs.</h1>
    <p className="sub">Software Engineer with full-stack experience in JavaScript, React, Node.js, and database-driven web applications. Passionate about delivering innovative, high-quality code and empowering users through technology.</p>
    <div className="cta">
      <a className="btn" href="#projects">View Projects</a>
      <a className="btn ghost" href="#contact">Get in Touch</a>
    </div>
    <div className="marquee" aria-hidden="true">
      <div className="track">
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>SQLite</span>
        <span>Postgres</span>
        <span>Prisma</span>
        <span>Supabase</span>
        <span>REST APIs</span>
        <span>Socket.IO</span>
        <span>Testing</span>
        <span>Git</span>
        <span>VS Code</span>
        <span>Figma</span>
        <span>HTML/CSS</span>
        {/* duplicated for seamless loop */}
        <span>JavaScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>SQLite</span>
        <span>Postgres</span>
        <span>Prisma</span>
        <span>Supabase</span>
        <span>REST APIs</span>
        <span>Socket.IO</span>
        <span>Testing</span>
        <span>Git</span>
        <span>VS Code</span>
        <span>Figma</span>
        <span>HTML/CSS</span>
      </div>
    </div>
  </header>
);

export default Hero;
