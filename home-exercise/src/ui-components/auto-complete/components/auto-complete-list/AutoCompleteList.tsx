import React from "react";
import Button from "../../../button/Button";
import {
  StyledAutoCompleteList,
  StyledEmptyResults,
  StyledResultsList,
  StyledViewMoreButtonWrapper,
} from "./styles";
import { IAutoCompleteListProps } from "./types";
import { useNavigate } from "react-router-dom";
import { ERoutes } from "../../../../routes/types";
const AutoCompleteList: React.FC<IAutoCompleteListProps> = ({ data }) => {
  const allResultsEmpty = data.every(({ results }) => results.length === 0);
  const navigate = useNavigate();

  if (allResultsEmpty) {
    return <StyledEmptyResults>No Results...</StyledEmptyResults>;
  }

  const handleViewMoreClick = (category: string) => {
    const path = ERoutes.Details.replace(":category", category);
    navigate(path);
  };
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
                const resultTitle = result.name;
                return <li key={idx}>{resultTitle}</li>;
              })}
              <StyledViewMoreButtonWrapper>
                <Button text="View more" onClick={() => handleViewMoreClick(category)} />
              </StyledViewMoreButtonWrapper>
            </StyledResultsList>
          </li>
        );
      })}
    </StyledAutoCompleteList>
  );
};

export default AutoCompleteList;
