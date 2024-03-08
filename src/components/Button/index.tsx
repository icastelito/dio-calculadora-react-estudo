import * as S from "./styles";
import { MouseEvent } from "react";

interface ButtonProps {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <S.ButtonContainer onClick={onClick} type="button">
      {label}
    </S.ButtonContainer>
  );
};

export default Button;
