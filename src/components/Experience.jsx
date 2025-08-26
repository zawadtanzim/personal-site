import React from 'react';

const Experience = () => (
  <section id="experience" className="section">
    <h2>Experience</h2>
    <div className="grid">
      <div className="card" style={{gridColumn: 'span 12'}}>
  <div className="kicker"><span className="institution">The Knowledge House</span> • Mar 2025 – Present</div>
        <h3>Full-Stack Web Development Fellow</h3>
        <p>Developed full-stack web applications using JavaScript, Express, and SQLite, focusing on relational database design, RESTful APIs, and user authentication through real-world projects.</p>
        <div className="meta">
          <span className="badge">JavaScript</span>
          <span className="badge">Express</span>
          <span className="badge">SQLite</span>
        </div>
      </div>
      <div className="card" style={{gridColumn: 'span 6'}}>
  <div className="kicker"><span className="institution">Bank of America</span> • Aug 2024 – May 2025</div>
        <h3>Relationship Banker</h3>
        <p>Built personalized financial solutions for 50+ clients daily, achieving a 95% satisfaction rating. Maintained 100% accuracy across 1,000+ transactions monthly, demonstrating attention to detail and regulatory compliance under pressure.</p>
        <div className="meta">
          <span className="badge">Client Solutions</span>
          <span className="badge">Communication</span>
          <span className="badge">Accuracy</span>
        </div>
      </div>
      <div className="card" style={{gridColumn: 'span 6'}}>
  <div className="kicker"><span className="institution">Year Up United</span> • Banking and Financial Support Services • 2024</div>
        <h3>Career Development Trainee</h3>
        <p>Year Up is a comprehensive career development program that collaborates with 250 corporate partners and includes college-level courses, professional training, and a six-month internship. Completed coursework in Excel, Business Writing, Public Speaking, and Professional Skills, along with specialized training in Business.</p>
        <div className="meta">
          <span className="badge">Excel</span>
          <span className="badge">Business Writing</span>
          <span className="badge">Public Speaking</span>
          <span className="badge">Professional Skills</span>
        </div>
      </div>
      <div className="card" style={{gridColumn: 'span 6'}}>
  <div className="kicker"><span className="institution">Popeyes</span> • Dec 2023 – July 2024</div>
        <h3>Shift Leader</h3>
        <p>Led a team in delivering fast-paced, high-quality service to over 300 customers daily. Trained new team members and built a supportive work culture, reducing turnover by 25%.</p>
      </div>
    </div>
  </section>
);

export default Experience;
