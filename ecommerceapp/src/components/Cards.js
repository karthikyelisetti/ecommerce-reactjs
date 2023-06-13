import React from "react";
import "./css/Cards.css";
import currency from "../images/currencyrupee.svg";
import { useState } from "react";

export default function Cards(props) {
  const [num, setNum ] = useState(0);

  function addToCart() {
    setNum(num+1);
    console.log(num);
  }

  return (
    <div className="card mt-5 mb-3" style={{ width: "18rem" }}>
      <img
        src={props.image}
        className="card-img-top"
        style={{ width: "286px", height: "180px" }}
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-price">Price: <img src={currency} />{props.price}</p>
        <p className="card-text">{props.description}</p>        
      </div>
      <div className="btn-product">
      <button type="button" onClick={addToCart} className="btn btn-dark me-3">Add to cart</button>
      <button type="button" className="btn btn-dark me-3">View details</button>
      </div>
    </div>
  );
}