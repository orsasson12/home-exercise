import { FC } from "react";
import { StyledButton } from "./styles";
import { ESeverity, IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({ onClick, text, severity = ESeverity.Default }) => {
  return (
    <StyledButton onClick={onClick} $severity={severity}>
      {text}
    </StyledButton>
  );
};

export default Button;
