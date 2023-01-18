import React from "react";

const TypingContext = React.createContext({
  duration: 0,
  wrongLetters: 0,
  wordIndex: 0,
  letterIndex: 0,
  wordsList: [],
  show: false,
  updateWrongWords: () => {},
  updateWordsList: () => {},
  updateShow: () => {},
  startTimer: () => {},
  stopTimer: () => {},
});

export default TypingContext;
