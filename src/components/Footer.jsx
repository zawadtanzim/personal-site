import React from 'react';

const Footer = () => (
  <footer className="container">
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:10, flexWrap:'wrap'}}>
      <div>Built and designed by Md Zawad Tanzim.<br/>All rights reserved. ©</div>
      <div style={{display:'flex', gap:10, alignItems:'center'}}>
        <a className="link" href="#intro">Back to top ↑</a>
      </div>
    </div>
  </footer>
);

export default Footer;
