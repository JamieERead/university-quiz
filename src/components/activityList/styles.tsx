import styled from "styled-components";

export const ActivityContainer = styled.div`
  border-top: 1px solid #b0e1ff;
`;

export const Button = styled.button`
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #b0e1ff;
  color: #1a9bec;
  padding: 1.5em;
  cursor: pointer;
  background: #f3f9fc;
  transition: 0.3s;
  &:hover {
    background: #1a9bec;
    color: white;
  }
`;
