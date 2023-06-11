import React from "react";
import shopbanner from "../images/shoppingbanner.jpg";
import elebanner from "../images/electronicsbanner.png";
import mobilebanner from "../images/mobilesbanner.webp";
import clothbanner from "../images/clothingbanner.webp";
import furnishbanner from "../images/furnishbanner.webp";
import grocerybanner from "../images/groceriesbanner.jpg";
import beautybanner from "../images/beautybanner.avif";
import "./css/Carousel.css";

export default function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={shopbanner} className="d-block" alt="shopping" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={elebanner} className="d-block" alt="laptops" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={mobilebanner} className="d-block" alt="mobiles" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={clothbanner} className="d-block" alt="clothing" />
        </div>
        <div className="carousel-item">
          <img src={furnishbanner} className="d-block" alt="perfumes" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={grocerybanner} className="d-block w-100" alt="perfumes" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={beautybanner} className="d-block w-100" alt="perfumes" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
