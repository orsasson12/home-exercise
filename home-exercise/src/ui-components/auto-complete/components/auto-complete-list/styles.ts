import styled from "styled-components";

export const StyledAutoCompleteList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledResultsList = styled.ul`
  list-style: none;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin-inline-start: 25px;

  li {
    padding-block: 8px;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const StyledViewMoreButtonWrapper = styled.div`
  align-self: flex-end;
`;
