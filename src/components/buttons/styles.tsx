import styled from "styled-components";

type ButtonProps = {
  buttonType: "red" | "green" | "blue";
};

const variant = {
  red: "#d64141",
  green: "#44a444",
  blue: "#199beb",
};

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: ${(props) => variant[props.buttonType]};
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
