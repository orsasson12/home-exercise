import { StyledTh } from "./styles";
import { ITableHeaderProps } from "./types";

const TableHeader: React.FC<ITableHeaderProps> = ({ keys }) => {
  return (
    <thead>
      <tr>
        {keys.map((key) => (
          <StyledTh key={key}>
            {key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())}
          </StyledTh>
        ))}
      </tr>
    </thead>
  );
};


export default TableHeader