import React from "react";
import "./css/Header.css";
import cart from '../cart.svg';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to="/">Brand Street</Link>            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="electronics.html"
                >
                  Electronics
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="fashion.html"
                >
                  Fashion
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="home-furnish.html"
                >
                  Furnishing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="groceries.html"
                >
                  Groceries
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="automotives.html"
                >
                  Automotives
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="beauty-care.html"
                >
                  Beauty&Care
                </a>
              </li>
            </ul>
            <div className="input-group w-50 mb-2" id="search">
              <input
                type="text"
                className="form-control"
                placeholder="Search Brand-Street"
                aria-label="Search products"
                aria-describedby="button-addon2"
                id="search-input"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                // onclick="navigateToSearch()"
              >
                Search
              </button>
            </div>

            <div className="shopping-cart">
              <div>
                <a href="cart.html">
                  <img
                    className="logo"
                    src={cart}
                    id="cart-logo"
                    alt="logo"
                  />
                  <span id="quantity">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
