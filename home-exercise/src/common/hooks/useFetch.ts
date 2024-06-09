import { useEffect, useState } from "react";
import { CATEGORIES, STAR_WARS_API_URL } from "../consts";
import axios from "axios";
import { IData } from "../types/types";
import { IUseFetch } from "./types";

export const useFetch = ({ inputQuery, category }: IUseFetch) => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (category) {
          const response = await axios.get(`${STAR_WARS_API_URL}${category}`);
          setData([{ category, results: response.data.results }]);
        } else {
          const categories = CATEGORIES.map(async (cat) => {
            if (!inputQuery) return { category: cat, results: [] };
            const response = await axios.get(`${STAR_WARS_API_URL}${cat}/?search=${inputQuery}`);
            return {
              category: cat,
              results: response.data.results,
            };
          });
          const results = await Promise.all(categories);
          setData(results);
        }
      } catch (err: any) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [inputQuery, category]);

  return { data, isLoading, error };
};
