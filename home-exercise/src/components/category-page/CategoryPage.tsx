import { useParams } from "react-router-dom";
import { ICategoryData, useFetch } from "../../common";
import Loader from "../../ui-components/loader/Loader";
import Table from "../../ui-components/table/Table";
import { filterData } from "./utils";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const { data, isLoading, error } = useFetch({ category });

  const initialCategoryData = data ? filterData(data[0]?.results) : [];
  const [categoryData, setCategoryData] = useState<ICategoryData[]>([]);

  useEffect(() => {
    setCategoryData(initialCategoryData as ICategoryData[]);
  }, [data]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const handleDelete = (index: number) => {
    const updatedData = categoryData.filter((_, i) => i !== index);
    setCategoryData(updatedData);
  };

  const handleEdit = (index: number, updatedItem: ICategoryData) => {
    const updatedData = categoryData.map((item, i) => (i === index ? updatedItem : item));
    setCategoryData(updatedData);
  };

  return (
    <div>
      <h1>Results for {category}</h1>
      <Table data={categoryData} onDelete={handleDelete} onEdit={handleEdit} category={category} />
    </div>
  );
};

export default CategoryPage;
