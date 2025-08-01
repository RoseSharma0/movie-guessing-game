import React from 'react';
import { useQuizLogic } from './logic';


const comedyQuotes = [
  {
    quote: "Why so serious?",
    options: ["The Joker", "Deadpool", "The Mask", "Ace Ventura"],
    answer: "The Joker"
  },
  {
    quote: "Mere paas maa hai.",
    options: ["Deewaar", "Sholay", " Amar Akbar Anthony", "Coolie"],
    answer: "Deewaar"
  },
  {
    quote: "Main toh kehta hoon inhe jail bhej do.",
    options: ["Majnu Bhai ", "Vasooli", " Amar Akbar Anthony", " Babu Rao"],
    answer: "Vasooli"
  },
  {
    quote: "Paise to haath ka mail hain, mail ko saaf karna chahiye.",
    options: ["Phir Hera Pheri", "Bhagam Bhag", " Jolly LLB", "Coolie"],
    answer: "Phir Hera Pheri"
  },
  {
    quote: "Abey yeh toh wahi hai jo pehle bhi mar chuka hai!",
    options: ["Phir Hera Pheri", "Bhagam Bhag", " Jolly LLB", "Coolie"],
    answer: "Deewaar"
  }
];

function ComedyQuiz() {
  const {
    currentQuestion,
    showResult,
    handleOptionClick
  } = useQuizLogic(comedyQuotes, "comedy");

  const current = comedyQuotes[currentQuestion];

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
          <p>Question {currentQuestion + 1} of {comedyQuotes.length}</p>
        </>
      ) : (
        <p>Redirecting to result...</p>
      )}
    </div>
  );
}
export default ComedyQuiz;
