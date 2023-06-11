import React from 'react';
import "./css/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Brand Street</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 fw-bold">
                  <a href="index.html" className="nav-link p-0 text-body-emphasis">Home</a>
                </li>
                <li className="nav-item mb-2 fw-bold">
                  <a
                    href="electronics.html"
                    className="nav-link p-0 text-body-emphasis">Electronics</a>
                </li>
                <li className="nav-item mb-2 fw-bold">
                  <a href="fashion.html" className="nav-link p-0 text-body-emphasis">Fashion</a>
                </li>
                <li className="nav-item mb-2 fw-bold">
                  <a
                    href="home-furnish.html"
                    className="nav-link p-0 text-body-emphasis">Furnishing</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>Shopping cart</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 fw-bold">
                  <a
                    href="groceries.html"
                    className="nav-link p-0 text-body-emphasis">Groceries</a>
                </li>
                <li className="nav-item mb-2 fw-bold">
                  <a
                    href="automotives.html"
                    className="nav-link p-0 text-body-emphasis">Automotives</a>
                </li>
                <li className="nav-item mb-2 fw-bold">
                  <a
                    href="beauty-care.html"
                    className="nav-link p-0 text-body-emphasis">Beauty&Care</a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <p><strong>We accept</strong></p>
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

            <div className="col-md-4 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-success" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
            <p>&copy; 2023 Brand Street, All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
