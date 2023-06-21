import React from "react";
import Header from "./Header";

export default function Cart() {
  var counter = parseInt(localStorage.getItem("cartCounter"));
  var cartArr = localStorage.getItem("cartArray");
  console.log(counter);
  // document.getElementById("quantity").innerHTML = counter;
  

  return (
    <>
      <Header></Header>
      <section>
        <div className="container p-5">
          <div className="row d-flex justify-content-center p-3">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header p-3" id="cart-card-hdr"></div>
                <div className="card-body" id="product-details"></div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0 fw-medium fs-10">
                    <i>Arrival by 20-Apr-2023 to 24-Apr-2023</i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4" id="cart-summary"></div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
