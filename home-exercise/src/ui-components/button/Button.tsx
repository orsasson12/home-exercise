import { FC } from "react";
import { StyledButton } from "./styles";
import { IButtonProps } from "./types";

const Button: FC<IButtonProps> = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
