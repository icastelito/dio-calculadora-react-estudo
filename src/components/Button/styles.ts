import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 100%;
  background-color: #282c34;
  color: white;
  font-size: 24px;
  font-family: "Roboto";
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4f4f4f;
  }
`;
