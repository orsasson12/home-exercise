import { useCallback, useState } from "react";
import { debounce } from "lodash";

export const useAutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputQuery, setInputQuery] = useState("");

  const debouncedFetchData = useCallback(
    debounce((input: string) => {
      setInputQuery(input);
    }, 500),
    []
  );

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedFetchData(value);
  };

  return {
    inputValue,
    handleInputChange,
    inputQuery,
  };
};
