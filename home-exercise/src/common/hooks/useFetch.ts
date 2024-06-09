import { useEffect, useState } from "react";
import { CATEGORIES, STAR_WARS_API_URL } from "../consts";
import axios from "axios";
import { IData } from "../types/types";

export const useFetch = (inputQuery: string) => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const categories = CATEGORIES.map(async (category) => {
          if (!inputQuery) return { category, results: [] };
          const response = await axios.get(`${STAR_WARS_API_URL}${category}/?search=${inputQuery}`);
          return {
            category,
            results: response.data.results,
          };
        });
        // using promise all to handle fetching multiple categories
        const results = await Promise.all(categories);
        setData(results);
      } catch (err: any) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [inputQuery]);

  return { data, isLoading, error };
};
