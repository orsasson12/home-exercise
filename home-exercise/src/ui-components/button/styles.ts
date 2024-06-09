import styled, { css } from "styled-components";
import { pulseAnimation } from "./animation";
import { ESeverity } from "./types";
import { getColorStyles } from "./utils";

export const StyledButton = styled.button<{ $severity: ESeverity }>`
  background: none;
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 12px;
  color: blue;
  ${({ $severity }) => getColorStyles($severity)}

  &:hover {
    cursor: pointer;
    ${({ $severity }) =>
      $severity === ESeverity.Default
        ? css`
            background-color: blue;
            color: white;
          `
        : getColorStyles($severity)}
    animation: ${pulseAnimation} 0.6s ease; /* Apply animation on hover */
  }
`;
