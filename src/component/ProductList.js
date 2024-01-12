import React from "react";

import "../Styles/productList.css";
import Product from "../component/Product";
import { products } from "../data";
//import shopping from "../images/shopping website.jpeg"


function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Let's, Explore My Work</h1>
        <p className="pl-desc">
          Following are the project's that I did using MEAN and MERN technology
          some are just using HTML and CSS
        </p>
      </div>

      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
