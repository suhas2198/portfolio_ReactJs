import React from "react";

import "../Styles/product.css";

import yellowcart from "../assets/Yellow Cart.jpeg"


const Product = ({ img }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href="#">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
