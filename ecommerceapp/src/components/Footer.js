import React from 'react';
import "./css/Footer.css";

export default function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Brand Street</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2 fw-bold">
                  <a href="index.html" class="nav-link p-0 text-body-emphasis">Home</a>
                </li>
                <li class="nav-item mb-2 fw-bold">
                  <a
                    href="electronics.html"
                    class="nav-link p-0 text-body-emphasis">Electronics</a>
                </li>
                <li class="nav-item mb-2 fw-bold">
                  <a href="fashion.html" class="nav-link p-0 text-body-emphasis">Fashion</a>
                </li>
                <li class="nav-item mb-2 fw-bold">
                  <a
                    href="home-furnish.html"
                    class="nav-link p-0 text-body-emphasis">Furnishing</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-2 mb-3">
              <h5>Shopping cart</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2 fw-bold">
                  <a
                    href="groceries.html"
                    class="nav-link p-0 text-body-emphasis">Groceries</a>
                </li>
                <li class="nav-item mb-2 fw-bold">
                  <a
                    href="automotives.html"
                    class="nav-link p-0 text-body-emphasis">Automotives</a>
                </li>
                <li class="nav-item mb-2 fw-bold">
                  <a
                    href="beauty-care.html"
                    class="nav-link p-0 text-body-emphasis">Beauty&Care</a>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <p><strong>We accept</strong></p>
              <img
                class="me-2"
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa"
              />
              <img
                class="me-2"
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express"
              />
              <img
                class="me-2"
                width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard"
              />
            </div>

            <div class="col-md-4 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="btn btn-success" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
            <p>&copy; 2023 Brand Street, All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
