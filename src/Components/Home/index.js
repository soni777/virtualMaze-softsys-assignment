import Header from "../Header";

import {
  Heading,
  HomeContainer,
  ParagraphInput,
  Paragraph,
  WrongInput,
  CorrectInput,
  CurrentLetter,
} from "./styledComponents";

import TypingContext from "../../Context/TypingContext";

const Home = () => (
  <div>
    <Header />
    <HomeContainer>
      <Heading>Typing Test</Heading>

      <TypingContext.Consumer>
        {(value) => {
          const {
            someText,
            wordsList,
            letterIndex,
            updateWordsList,
            updateWrongWords,
            startTimer,
            stopTimer,
          } = value;

          const onKeyupWordsList = (event) => {
            let text = "";
            if (event.key.length === 1 || event.key === "space") {
              if (someText[letterIndex] === event.key) {
                text = event.key;
              } else {
                text = event.key;
                updateWrongWords();
              }
              updateWordsList(text, letterIndex + 1);
            }
          };

          const getCurrentLetterToType = () => {
            let para = [];
            for (let index in someText) {
              index = parseInt(index);
              if (letterIndex === someText.length) {
                stopTimer();
              } else if (index < letterIndex) {
                if (wordsList[index] === someText[index]) {
                  para.push(<CorrectInput>{someText[index]}</CorrectInput>);
                } else {
                  para.push(<WrongInput>{someText[index]}</WrongInput>);
                }
              } else if (index === letterIndex) {
                para.push(<CurrentLetter>{someText[index]}</CurrentLetter>);
              } else {
                para.push(someText[index]);
              }
            }

            return para;
          };

          const onClickStartTimer = () => {
            startTimer();
          };

          return (
            <div>
              <Paragraph as="p">{getCurrentLetterToType()}</Paragraph>
              <Paragraph as="div">
                <p>{wordsList}</p>
                <ParagraphInput
                  placeholder="click here to start"
                  value=""
                  readOnly
                  onKeyUp={onKeyupWordsList}
                  onClick={onClickStartTimer}
                />
              </Paragraph>
            </div>
          );
        }}
      </TypingContext.Consumer>
    </HomeContainer>
  </div>
);

export default Home;
