// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // ✅ Step 1: use the hook

  return (
    <div className="container">
       <div className="title-box">
         <h1>🎬 Movie Quote Quiz</h1>
       </div>
      <p>Choose a genre to get started:</p>

      <button
        onClick={() => navigate('/quiz/bollywood')}
      >
        🎬 Bollywood
      </button>

      <button
        onClick={() => navigate('/quiz/action')}
      >
        💥 Action
      </button>

      <button
        onClick={() => navigate('/quiz/comedy')}
      >
        😂 Comedy
      </button>
    </div>
  );
}

export default Home;
