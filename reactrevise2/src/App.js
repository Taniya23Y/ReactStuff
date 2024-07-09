import React from "react";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";

const App = () => {
  const products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2024, 7, 1),
    },
    {
      id: "p2",
      title: "Surf-Excel",
      amount: 200,
      date: new Date(2024, 7, 2),
    },
    {
      id: "p3",
      title: "Fena",
      amount: 130,
      date: new Date(2024, 7, 3),
    },
    {
      id: "p4",
      title: "Tide",
      amount: 130,
      date: new Date(2024, 7, 4),
    },
  ];

  function printProductData(data) {
    console.log("I am inside APP.js");
    console.log(data);
  }

  return (
    <div className="App">
      <NewProduct printProduct={printProductData} />
      <Products items={products}></Products>
    </div>
  );
};

export default App;
