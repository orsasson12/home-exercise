import React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IAutoCompleteListProps } from "./types";
import { useNavigate } from "react-router-dom";
import { ERoutes } from "../../../../routes/types";

const AutoCompleteList: React.FC<IAutoCompleteListProps> = ({ data }) => {
  const allResultsEmpty = data.every(({ results }) => results.length === 0);
  const navigate = useNavigate();

  if (allResultsEmpty) {
    return <Typography>No Results...</Typography>;
  }

  const handleViewMoreClick = (category: string) => {
    const path = ERoutes.Details.replace(":category", category);
    navigate(path);
  };

  return (
    <Box>
      {data.map(({ category, results }, index) => {
        const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
        const filteredResults = results.slice(0, 3);
        if (filteredResults.length === 0) return null;

        return (
          <Box key={index} mb={2}>
            <Typography variant="h6">{categoryTitle}:</Typography>
            <List>
              {filteredResults.map((result, idx) => {
                const resultTitle = result.name;
                return (
                  <ListItem key={idx}>
                    <ListItemText primary={resultTitle} />
                  </ListItem>
                );
              })}
              <ListItem>
                <Button onClick={() => handleViewMoreClick(category)}>View more</Button>
              </ListItem>
            </List>
          </Box>
        );
      })}
    </Box>
  );
};

export default AutoCompleteList;
