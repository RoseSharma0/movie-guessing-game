// src/pages/logic.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useQuizLogic(questions, genre) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  const navigate = useNavigate();

  const handleOptionClick = (selectedOption) => {
    let updatedScore = score;
    if (selectedOption === questions[currentQuestion].answer) {
      updatedScore += 1;
      setScore(updatedScore);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowResult(true);
      navigate('/result', {
        state: {
          score: updatedScore,
          total: questions.length,
          genre: genre
        }
      });
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return {
    currentQuestion,
    score,
    showResult,
    handleOptionClick,
    restartGame
  };
}
