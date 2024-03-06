import * as S from "./styles";

const Button = ({ label, onClick }) => {
  return (
    <S.ButtonContainer onClick={onClick} type="button">
      {label}
    </S.ButtonContainer>
  );
};

export default Button;
