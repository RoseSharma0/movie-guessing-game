import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
  const location = useLocation();      
  const navigate = useNavigate();      

  const { score, total, genre } = location.state || {};  // genre is optional but helpful

  return (
    <div className="container text-center mt-5">
      <h2>🎉 Quiz Completed!</h2>
      <p className="lead">You scored <strong>{score}</strong> out of <strong>{total}</strong></p>

      {/* ✅ Retry → Go to Home */}
      <button
           className="btn me-3"
  style={{ backgroundColor: '#86aa69', color: 'white' }}
  onClick={() => navigate(`/quiz/${genre}`)}
        >
        🔁 Go to Home
      </button>

      {/* ✅ Play Again → Restart same quiz */}
      {genre && (
        <button
           className="btn me-3"
  style={{ backgroundColor: '#86aa69', color: 'white' }}
  onClick={() => navigate(`/quiz/${genre}`)}
        >
          🔄 Play Again
        </button>
      )}

      {/* ✅ Optional Share Button */}
      <button
        className="btn btn-primary me-3"
        onClick={() => {
          const text = `I scored ${score}/${total} in the Movie Quote Quiz! 🎬 Try it out!`;
          navigator.clipboard.writeText(text);
          alert("Score copied to clipboard!");
        }}
      >
        📋 Share Score
      </button>
    </div>
  );
}
