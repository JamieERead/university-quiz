import styled from "styled-components";

export type QuestionColors = "red" | "green" | "blue";

type Props = {
  variant: QuestionColors;
};

const variant = {
  red: {
    background: "#fca2a2",
    border: "#c85858",
  },
  green: {
    background: "#82ef7f",
    border: "#52b248",
  },
  blue: {
    background: "#f3f9fc",
    border: "#b0e1ff",
  },
};

export const QuestionContainer = styled.div<Props>`
  border-top: 1px solid ${(props) => variant[props.variant].border};
  border-bottom: 1px solid ${(props) => variant[props.variant].border};
  background: ${(props) => variant[props.variant].background};
  padding: 0.25em 1em;
  margin-bottom: 2em;
`;
