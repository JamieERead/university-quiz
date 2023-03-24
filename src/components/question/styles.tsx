import styled from "styled-components";

type Props = {
  showAnswer: boolean;
};

export const QuestionContainer = styled.div<Props>`
  border-top: 1px solid ${(props) => (props.showAnswer ? "#c85858" : "#b0e1ff")};
  border-bottom: 1px solid
    ${(props) => (props.showAnswer ? "#c85858" : "#b0e1ff")};
  background: ${(props) => (props.showAnswer ? "#fca2a2" : "#f3f9fc")};
  padding: 0.25em 1em;
  margin-bottom: 2em;
`;
