import React from 'react';

import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    // Theme toggle with persistence
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');
    if (stored === 'light') document.body.classList.add('light');
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.onclick = () => {
        document.body.classList.toggle('light');
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
      };
    }
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.onclick = e => {
        const id = a.getAttribute('href');
        if (id.length > 1) {
          e.preventDefault();
          document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    });
  }, []);
  return (
    <nav>
      <div className="container nav-inner">
        <div className="brand">
          <span>Md Zawad Tanzim</span>
        </div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <button id="themeToggle" className="btn ghost" aria-label="Toggle theme">Toggle</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
