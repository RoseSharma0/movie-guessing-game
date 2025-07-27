import React from 'react';
import { useQuizLogic } from './logic';

const bollywoodQuotes=[
    {
        quote:"Main apni favourite hoon.",
        options: ["Hera Pheri","Jab We Met","Om Shanti Om","Kabhi Khushi Kabhie Gham"],
        answer: "Jab We Met"
    },
    {
        quote:"Picture abhi baaki hai mere dost.",
        options: ["Om Shanti Om","Fan","Chennai Express","Ra.One"],
        answer: "Om Shanti Om"
    },
    {
        quote:"Ek baar jo maine commitment kar di, toh main apne aap ki bhi nahi sunta.",
        options: ["Kick","Bodyguard","Wanted","Tiger Zinda Hai"],
        answer: "Wanted"
    },
    {
        quote:"Insaan ko dibbe mein sirf tab hona chahiye jab woh mar gaya ho",
        options: ["Piku","Om Shanti Om","Ra.One","Chennai Express"],
        answer: "Piku"
    },
    {
        quote:"Utha le re baba, utha le... mereko nahi re, in dono ko utha le!",
        options: ["Hera Pheri","Phir Hera Pheri","3 Idiots","Kuch Kuch Hota Hai"],
        answer: "Hera Pheri"
    },
];
function BollywoodQuiz() {
  const {
    currentQuestion,
    score,
    showResult,
    handleOptionClick,
    restartGame
  } = useQuizLogic(bollywoodQuotes, "bollywood");

  const current =  bollywoodQuotes[currentQuestion];


  return (
    <div>
      {!showResult ? (
        <>
          <h3>{current.quote}</h3>
          {current.options.map((opt, idx) => (
            <button key={idx} onClick={() => handleOptionClick(opt)}>
              {opt}
            </button>
          ))}
          <p>Question {currentQuestion + 1} of {bollywoodQuotes.length}</p>
        </>
      ) : (
        <p>Redirecting to result...</p>
      )}
    </div>
  );
}

export default BollywoodQuiz;
