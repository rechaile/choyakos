import React from "react";
import arrs from "../../data";
import { Link, useParams } from "react-router-dom";

const { categories } = arrs;

export default function Subcategories() {
	const {categoryName} = useParams()
  return (
    <>
      {categories.map((element) => {
		  return(
			element.name === categoryName && (
				<Link>
				  <button>{element.subCategory}</button>
				</Link>
			  )
		  )
      })}
    </>
  );
}
