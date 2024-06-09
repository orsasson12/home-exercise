import styled from "styled-components";
import { pulseAnimation } from "./animation";

export const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 12px;
  color: blue;
  &:hover {
    cursor: pointer;
    background-color: blue;
    color: white;
    animation: ${pulseAnimation} 0.6s ease; /* Apply animation on hover */
  }
`;
