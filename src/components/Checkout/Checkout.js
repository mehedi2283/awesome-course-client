import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const checkOut = useLoaderData();
  console.log(checkOut);
  return (
    <div>
      <hr />
      <h1> {checkOut.category_name}</h1>
      <img className="rounded" src={checkOut.img} alt="" />
      <hr />
      <h5>Cheking Out</h5>
    </div>
  );
};

export default Checkout;
