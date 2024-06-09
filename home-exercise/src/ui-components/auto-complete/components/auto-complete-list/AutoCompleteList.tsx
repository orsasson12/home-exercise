import Button from "../../../button/Button";
import { StyledAutoCompleteList, StyledResultsList, StyledViewMoreButtonWrapper } from "./styles";
import { IAutoCompleteListProps } from "./types";

const AutoCompleteList: React.FC<IAutoCompleteListProps> = ({ data }) => {
  return (
    <StyledAutoCompleteList>
      {data.map(({ category, results }, index) => {
        const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
        const filteredResults = results.slice(0, 3);
        if (filteredResults.length === 0) return null;
        return (
          <li key={index}>
            <h3>{categoryTitle}:</h3>
            <StyledResultsList>
              {filteredResults.map((result, idx) => {
                const resultTitle = result.name || result.title;
                return <li key={idx}>{resultTitle} </li>;
              })}
              <StyledViewMoreButtonWrapper>
                <Button text="View more" />
              </StyledViewMoreButtonWrapper>
            </StyledResultsList>
          </li>
        );
      })}
    </StyledAutoCompleteList>
  );
};

export default AutoCompleteList;
