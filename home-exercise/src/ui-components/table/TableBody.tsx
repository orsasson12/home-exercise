import { StyledTd } from "./styles";
import { ITableBodyProps } from "./types";

const TableBody: React.FC<ITableBodyProps> = ({ data, keys }) => {
  const values = Object.values(data);

  return (
    <tbody>
      <tr>
        {values.map((value, index) => (
          <StyledTd key={keys[index]}>
            {keys[index] === "url" || keys[index] === "created" || keys[index] === "edited"
              ? new Date(value).toLocaleString()
              : value}
          </StyledTd>
        ))}
      </tr>
    </tbody>
  );
};

export default TableBody;
