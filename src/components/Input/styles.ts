import styled from "styled-components";

export const Input = styled.input`
  position: relative;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #1a1a1a;
  color: #fff;
  transition: border-color 0.25s;
  width: 100%;
  top: 0;
  &:focus {
    border-color: #646cff;
  }
`;
