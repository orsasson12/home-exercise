import { URL_KEY, CREATED_KEY, EDITED_KEY } from "./consts";
import { StyledTd } from "./styles";
import { ITableBodyProps } from "./types";

const TableBody: React.FC<ITableBodyProps> = ({ data, keys }) => {
  const values = Object.values(data);

  return (
    <tbody>
      <tr>
        {values.map((value, index) => (
          <StyledTd key={keys[index]}>
            {keys[index] === URL_KEY || keys[index] === CREATED_KEY || keys[index] === EDITED_KEY
              ? new Date(value).toLocaleString()
              : value}
          </StyledTd>
        ))}
      </tr>
    </tbody>
  );
};

export default TableBody;
