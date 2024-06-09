import { ICategoryData } from "../../common";

export const filterData = (data: ICategoryData[]) => {
  if (!data) return;
  return data.map((item: ICategoryData) => {
    const { films, species, vehicles, starships, ...filteredItem } = item;
    return filteredItem;
  });
};
