import styled from "styled-components";

export const StyledAutoCompleteWrapper = styled.div`
  display: flex;
  justify-content: center;
  input {
    padding: 10px;
    font-size: 16px;
    width: 100%;
    border-radius: 12px;
    outline: none;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledAutoCompleteContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const StyledAutoCompleteListWrapper = styled.div`
  background-color: wheat;
  padding: 10px;
  border-radius: 10px;
  max-height: 700px;
  overflow-y: auto;
`;
