import React from "react";
import { Link } from "react-router-dom";
import arrs from "../../data";
import Subcategories from "../SubCategories/Subcategories";

const { categories } = arrs;

export default function Menu() {
  return (
    <div>
      {categories.map((element) => (
        <>
        {console.log(typeof element.name)}
          <Link to={`/category/${element.name}`}>
            <button>
              {element.name} <img src={element.icon} alt={element.name} />
            </button>
          </Link>
        </>
      ))}
	  <Subcategories />
    </div>
  );
}
