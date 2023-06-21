import React from "react";
import { useState } from "react";
import "./css/Cards.css";
import currency from "../images/currencyrupee.svg";
import Header from "./Header";
import { Link } from "react-router-dom";

var cartArr = [];

export default function Cards(props) {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const [counter, setCounter] = useState(0);
  const alert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  function addToCart() {
    if (cartArr.length != 0 && cartArr.includes(props.id.toString())) {
      alert("Item is already added to the cart", "warning");
      return false;
    } else {
      cartArr.push(props.id.toString()); 
      let cartCount = cartArr.length;   
      document.getElementById("quantity").innerHTML = setCounter(cartCount+1);
      localStorage.setItem("cartCounter", setCounter(cartCount+1));
      localStorage.setItem("cartArray", cartArr);
    }
  }

  function viewDetails() {
    console.log("View Details");
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
        <p className="card-price">
          Price: <img src={currency} />
          {props.price}
        </p>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="btn-product">
        <button
          type="button"
          className="btn btn-dark me-3"
          id={props.id}
          onClick={addToCart}
        >
          Add to cart
        </button>
        {/* <button
          type="button"
          className="btn btn-dark me-3"
          onClick={viewDetails}
        >
          View details
        </button> */}
        <Link className="btn btn-dark me-3" to={`/info/${props.id}`}>View Product</Link>
      </div>
    </div>
  );
}
