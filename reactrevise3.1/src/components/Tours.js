import React from "react";
import Card from "./Card";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="container">
      <div className="title">
        <h2>Plan With Love</h2>
      </div>
      <div className="tours-cards">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
};

export default Tours;
