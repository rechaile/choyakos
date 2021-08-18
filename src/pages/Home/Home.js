import React, { useState, useEffect } from "react";
import arrs from "../../data";
import Carousel from 'react-bootstrap/Carousel'

const {data, carousel} = arrs;

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsFromApi = await fetchProducts();
      setProducts(productsFromApi);
    };

    getProducts();
  }, []);

  const fetchProducts = async () => {
    /* const res = await fetch();
    const data = await res.json();

    return data; */
    const productsFromDB = data;

    return productsFromDB;
  };

  return (
    <>
      <Carousel>
        {carousel.map(element => <Carousel.Item>
          <img
            className="d-block w-100"
            src={element}
            alt=""
          />
        </Carousel.Item>)}
      </Carousel>
      {products.map((element) => {
        return (
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
        );
      })}
    </>
  );
}
