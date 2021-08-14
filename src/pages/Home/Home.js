import React, { useState, useEffect } from "react";

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
    const res = await fetch();
    const data = await res.json();

    return data;
  };

  return (
    <div>
      <h1>home</h1>
    </div>
  );
}
