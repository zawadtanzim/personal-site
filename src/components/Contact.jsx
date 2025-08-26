import React from 'react';

const Contact = () => (
  <section id="contact" className="section">
    <div className="contact">
      <div className="cta-box">
  <h3>Let’s build something great</h3>
  <p style={{color:'var(--muted)', maxWidth: '52ch'}}>Open to web development, full-stack, technical support, IT help desk, and any entry-level tech roles. Excited to learn, grow, and make an impact. Love to chat.</p>
        <div className="cta">
          <a className="btn" href="mailto:zawadtanzim@gmail.com">Email Me</a>
          <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
  <div className="panel">
        <h2>Links</h2>
        <div className="list">
          <a className="row" href="https://github.com/zawadtanzim" target="_blank" rel="noreferrer">
            <span>GitHub</span><strong>github.com/zawadtanzim</strong>
          </a>
          <a className="row" href="https://www.linkedin.com/in/zawadtanzim/" target="_blank" rel="noreferrer">
            <span>LinkedIn</span><strong>linkedin.com/in/zawadtanzim</strong>
          </a>
          <a className="row" href="https://x.com/codelevoyage" target="_blank" rel="noreferrer">
            <span>X / Twitter</span><strong>@codelevoyage</strong>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
