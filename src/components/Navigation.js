import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ padding: '1rem', marginBottom: '2rem', backgroundColor: '#a2ffa3ff' }}>
      <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#44628bff' }}>
        <b>🎬 Quiz Home</b>
      </Link>
      <Link to="/quiz/bollywood" style={{ textDecoration: 'none', color: '#44628bff' }}>
       <b> 🎬 Bollywood</b>
      </Link>
      <Link to="/quiz/action" style={{ textDecoration: 'none', color: '#44628bff' }}>
        <b> 💥 Action</b>
      </Link>
      <Link to="/quiz/comedy" style={{ textDecoration: 'none', color: '#44628bff' }}>
       <b>😂 Comedy   </b>  
       </Link>
    </nav>
  );
}

export default Navigation;
