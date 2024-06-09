import { useParams } from "react-router-dom";
import { ICategoryData, useFetch } from "../../common";
import Loader from "../../ui-components/loader/Loader";
import Table from "../../ui-components/table/Table";
import { filterData } from "./utils";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  const { data, isLoading, error } = useFetch({ category });

  // Move the state initialization after the useFetch hook
  const initialCategoryData = data ? filterData(data[0]?.results) : [];

  const [categoryData, setCategoryData] = useState<ICategoryData[]>([]);

  useEffect(() => {
    setCategoryData(initialCategoryData as ICategoryData[]);
  }, []);
  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const handleDelete = (index: number) => {
    const updatedData = categoryData.filter((_, i) => i !== index);
    setCategoryData(updatedData);
  };

  const handleEdit = (index: number) => {
    const selectedItem = categoryData.find((_, i) => i === index);
    console.log(selectedItem);

  };

  return (
    <div>
      <h1>Results for {category}</h1>
      <Table data={categoryData} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default CategoryPage;
