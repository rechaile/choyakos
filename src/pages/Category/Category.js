import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Category() {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const { categoryName } = useParams(); // parámetro de url para category
  const { subCategoryName } = useParams(); // parámetro de url para subCategory

  useEffect(() => {
    const getCategory = async () => {
      const categoryFromApi = await fetchCategory();
      setCategory(categoryFromApi);

      if (subCategoryName) {
        const subCategoryFromApi = await fetchSubcategory();
        setSubCategory(subCategoryFromApi);
	  }
    };

    getCategory();
  }, [categoryName, subCategoryName]);

  const fetchCategory = async () => {
    const res = await fetch();
    const data = await res.json();

    return data;
  };

  const fetchSubcategory = async () => {
    const filterSubCategory = await category.filter(
      (element) => element.category === subCategoryName
    );

    return filterSubCategory;
  };

  return (
  <div>
	  <h1>categorías</h1>
  </div>
  );
}
