import React from "react";
import ProductForm from "./ProductForm";
import "./NewProduct.css";

function NewProduct(props) {
  function saveProduct(product) {
    console.log("I am in  newProduct");
    console.log(product);

    // calling parent function
    props.printProduct(product);
  }
  return (
    <div className="new-product">
      <ProductForm onSaveProduct={saveProduct} />
    </div>
  );
}

export default NewProduct;
