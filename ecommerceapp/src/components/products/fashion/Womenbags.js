import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/Cards.css";
import "../../css/Landingpage.css";
import Cards from "../../Cards";

export default function Womenbags() {
  // const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState([]);
  // let count = 0;

  useEffect(() => {
    const apicalling = async () => {
      try {
        let response = await axios.get(
          "https://dummyjson.com/products/category/womens-bags"
        );
        setProduct(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    apicalling();
  }, []);

  return (
    <div className="cards">
      {product.length !== 0 ? (
        product.map((element) => {
          return (
            <Cards
              title={element.title}
              image={element.images[0]}
              description={element.description}
              price={element.price}
            />
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}
