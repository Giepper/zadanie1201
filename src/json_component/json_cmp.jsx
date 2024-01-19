import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  //   Pobranie danych JSON do komponentu
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Import danych z pliku JSON
        const response = await import("./data.json");
        setProducts(response.default);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };
    fetchData();
  }, []);

  const GetProductData = () => {
    products.forEach((product) => {
      console.log(product.nazwa);
    });
    console.log(products);
  };

  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.nazwa}</li>
        ))}
      </ul>
      <button onClick={GetProductData}>Pokaż tytuły produktów</button>
    </div>
  );
};

export default ProductList;
