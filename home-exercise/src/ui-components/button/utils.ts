import { ESeverity } from "./types";
import { css } from "styled-components";

export const getColorStyles = (severity: ESeverity) => {
  switch (severity) {
    case ESeverity.Success:
      return css`
        background-color: green;
        color: white;
      `;
    case ESeverity.Warning:
      return css`
        background-color: orange;
        color: white;
      `;
    case ESeverity.Error:
      return css`
        background-color: red;
        color: white;
      `;
    case ESeverity.Info:
      return css`
        background-color: blue;
        color: white;
      `;
    default:
      return css`
        background: none;
        color: blue;
      `;
  }
};
