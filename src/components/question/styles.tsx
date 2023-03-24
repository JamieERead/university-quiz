import styled from "styled-components";

export const QuestionContainer = styled.div`
  border-top: 1px solid #b0e1ff;
  border-bottom: 1px solid #b0e1ff;
  background: #f3f9fc;
  padding: 0.25em 1em;
  margin-bottom: 2em;
`;

type ButtonProps = {
  buttonType?: string;
};

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: ${(props) =>
    props.buttonType === "correct" ? "#44a444" : "#d64141"};
  color: #ffffff;
  border-radius: 5px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  transition: transform 200ms, background 200ms;
  :hover {
    transform: translateY(-2px);
  }
`;
