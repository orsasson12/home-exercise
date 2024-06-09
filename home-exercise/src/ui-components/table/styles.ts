import styled from "styled-components";
export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const StyledTh = styled.th`
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
`;

export const StyledTd = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
`;

export const StyledTableWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTableActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 5px;

  input {
    font-size: 16px;
    border-radius: 12px;
    outline: none;
    padding: 2px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: 700;
`;
