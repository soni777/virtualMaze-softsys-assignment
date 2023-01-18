import { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import TypingContext from "./Context/TypingContext";

import Home from "./Components/Home";

import "./App.css";

const someText =
  "because sitting at computer is the exact opposite of exercise, you should take a more active break.";

let uniqueId = "";

const defaultValue = {
  someText,
  duration: 0,
  wrongLetters: 0,
  wordIndex: 0,
  letterIndex: 0,
  wordsList: [],
};

class App extends Component {
  state = defaultValue;

  // componentDidMount() {
  //   this.setState({ wordsList: someText.split("") });
  // }

  componentWillUnmount() {
    clearInterval(uniqueId);
  }

  updateWrongWords = () => {
    this.setState((prev) => ({ wrongLetters: prev.wrongLetters + 1 }));
  };

  updateWordsList = (letter, letterIndex) => {
    let { wordsList } = this.state;
    wordsList.push(letter);
    this.setState({ wordsList, letterIndex });
  };

  startTimer = () => {
    uniqueId = setInterval(() => {
      this.setState((prev) => ({ duration: prev.duration + 1 }));
    }, 1000);
  };

  getResult = () => {
    const { duration, wrongLetters, someText } = this.state;
    const accuracy = Math.floor(
      someText.length - ((wrongLetters / someText.length) * 1) / 100
    );
    const speed = Math.floor(
      (someText.length - wrongLetters) / 5 / (duration / 60)
    );
    alert(`Duration: ${duration} secs
    Accuracy: ${accuracy} %
    Speed: ${speed} wpm
    `);
  };

  stopTimer = () => {
    clearInterval(uniqueId);
    this.getResult();

    // this.setState({ defaultValue });
  };

  render() {
    const {
      duration,
      wrongLetters,
      wordsList,
      someText,
      letterIndex,
    } = this.state;
    return (
      <TypingContext.Provider
        value={{
          duration,
          wrongLetters,
          wordsList,
          someText,
          letterIndex,
          updateWrongWords: this.updateWrongWords,
          updateWordsList: this.updateWordsList,
          startTimer: this.startTimer,
          stopTimer: this.stopTimer,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </TypingContext.Provider>
    );
  }
}

export default App;
