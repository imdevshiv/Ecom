import React from "react";
import "./index.scss";

const index = () => {
  return (
    <div className="container">
      <h1 className="logo">Ecom</h1>
      <input placeholder="Search" type="text" />
      <h1 className="cart">🛒</h1>
    </div>
  );
};

export default index;
