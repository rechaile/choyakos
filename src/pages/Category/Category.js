import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrs from "../../data";

const { datad } = arrs;

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
    /* const res = await fetch();
    const data = await res.json(); */

    const categoryData = await datad.filter(
      (element) => element.category === categoryName
    );

    return categoryData;
  };

  const fetchSubcategory = async () => {
    const filterSubCategory = await category.filter(
      (element) => element.category === subCategoryName
    );

    return filterSubCategory;
  };

  console.log(category);

  return (
    <>
      {category.map((element) => (
        <div>
          <img className="img-prod" src={element.img} alt="" />
          <a target="_blank" rel="noreferrer" href={element.url}>
            <h5>{element.title}</h5>
          </a>
          <p>{element.description}</p>
          <p>
            {element.price} <span>{element.savings}</span>
          </p>
          <a target="_blank" rel="noreferrer" href={element.url}>
            <button>Ir a choyakos</button>
          </a>
        </div>
      ))}
    </>
  );
}
