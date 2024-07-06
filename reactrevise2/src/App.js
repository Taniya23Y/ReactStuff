import React from "react";
import Products from "./components/Products";

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

  return (
    <div>
      <Products items={products}></Products>
    </div>
  );
};

export default App;
