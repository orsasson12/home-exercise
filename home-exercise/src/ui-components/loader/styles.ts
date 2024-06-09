import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const StyledLoader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 40px;
  margin: 0 auto;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;
