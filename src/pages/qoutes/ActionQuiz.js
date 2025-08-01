import React from 'react';
import { useQuizLogic } from './logic';

const actionQuotes = [
  {
    quote: "Aata majhi satakli!",
    options: ["Dabangg", " Singham", " Rowdy Rathore", "Simmba"],
    answer: "Singham"
  },
  {
    quote: "Main aaj bhi feke hue paise nahi uthata",
    options: ["Amitabh Bachchan", "Shah Rukh Khan", "Akshay Kumar", "Sunny Deol"],
    answer: "Amitabh Bachchan"
  },
   {
    quote: "Mard ko dard nahi hota.",
    options: ["Amitabh Bachchan", "Shah Rukh Khan", "Akshay Kumar", "Sunny Deol"],
    answer: "Amitabh Bachchan"
  },
   {
    quote: "Baap ke naam ka sahara kamzor log lete hain.",
    options: ["Dhoom 2", "Agneepath", "War", "Pathaan"],
    answer: "Agneepath"
  },
   {
    quote: "Tujhe yaad kar liya hai aayat ki tarah.",
    options: [" Phantom", " Bajrangi Bhaijaan", " Bajirao Mastani", "Pathaan"],
    answer: " Bajrangi Bhaijaan"
  }
];


function ActionQuiz() {
  const {
    currentQuestion,
    showResult,
    handleOptionClick
  } = useQuizLogic(actionQuotes,"action");

  const current = actionQuotes[currentQuestion];

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
          <p>Question {currentQuestion + 1} of {actionQuotes.length}</p>
        </>
      ) : (
        <p>Redirecting to result...</p>
      )}
    </div>
  );
}
export default ActionQuiz;