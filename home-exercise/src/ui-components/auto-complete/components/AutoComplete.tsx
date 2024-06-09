import { useAutoComplete } from "../hook/useAutoComplete";
import { useFetch } from "../../../common";
import "./App.css";
import Loader from "./loader/Loader";
import AutoCompleteList from "./auto-complete-list/AutoCompleteList";
import {
  StyledAutoCompleteContainer,
  StyledAutoCompleteListWrapper,
  StyledAutoCompleteWrapper,
  StyledWrapper,
} from "./styles";

const AutoComplete = () => {
  const { inputValue, handleInputChange, input } = useAutoComplete();
  const { data, isLoading } = useFetch(input);
  const shouldShowList = !!input;

  return (
    <StyledAutoCompleteContainer>
      <h1>Star Wars</h1>
      <StyledWrapper>
        <StyledAutoCompleteWrapper>
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search" />
        </StyledAutoCompleteWrapper>
        {shouldShowList && (
          <StyledAutoCompleteListWrapper>
            {isLoading ? <Loader /> : <AutoCompleteList data={data} />}
          </StyledAutoCompleteListWrapper>
        )}
      </StyledWrapper>
    </StyledAutoCompleteContainer>
  );
};

export default AutoComplete;
