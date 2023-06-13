import React from "react";
import Smartphones from "./Smartphones";
import Header from "../../Header";
import Laptops from "./Laptops";
import Footer from "../../Footer";

export default function Electronics() {
  return (
    <>
      <Header></Header>
      <Smartphones></Smartphones>
      <Laptops></Laptops>
      <Footer></Footer>
    </>
  );
}
