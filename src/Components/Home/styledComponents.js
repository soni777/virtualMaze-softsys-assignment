import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1``;

export const ParagraphInput = styled.input`
  border: none;
  outline: none;
  height: 20px;
  width: 800px;
`;

export const Paragraph = styled.p`
  border: 1px solid #f5f1e4;
  //   background: #f5f1e4;
  height: 200px;
  width: 800px;
  padding: 30px;
  font-size: 30px;
`;

export const WrongInput = styled.span`
  background-color: #f57d8f;
  color: ##a6021a;
`;

export const CorrectInput = styled.span`
  background-color: #7cf786;
  color: #05b014;
`;

export const CurrentLetter = styled.span`
  border-bottom: 5px solid royalblue;
  font-size: 32px;
  font-weight: 500;
  width: 20px;
`;
