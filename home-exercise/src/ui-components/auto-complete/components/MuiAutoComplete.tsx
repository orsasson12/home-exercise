import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { useFetch } from "../../../common";
import { useAutoComplete } from "../hook/useAutoComplete";
import AutoCompleteList from "./auto-complete-list/MuiAutoCompleteList";

const AutoComplete = () => {
  const { inputValue, handleInputChange, inputQuery } = useAutoComplete();
  const { data, isLoading } = useFetch({ inputQuery });
  const shouldShowList = !!inputQuery;

  return (
    <Box p={2}>
      <TextField fullWidth value={inputValue} onChange={handleInputChange} placeholder="Search" />
      {shouldShowList && (
        <Box mt={2}>{isLoading ? <CircularProgress /> : <AutoCompleteList data={data} />}</Box>
      )}
    </Box>
  );
};

export default AutoComplete;
