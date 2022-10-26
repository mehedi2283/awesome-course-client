import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from './Details.module.css'
import { HiStar } from "react-icons/hi";

const Details = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <Card className="w-75 mx-auto">
      <Card.Header className="text-center"> <h3>{details.category_name}</h3> </Card.Header>
      <Card.Img variant="top" src={details.img} className={`${style.card} rounded-0`} />
      <Card.Body>
        <Card.Title>Details about this course:</Card.Title>
        <Card.Text>
          {details.details}
        </Card.Text>
        <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
            <HiStar></HiStar>
                <p className="mb-0">{details.ratings}</p>
            </div>
            <h5>Price: {details.price}</h5>
        </div>
        <NavLink to={`/course/details/checkout/${details._id}`}><Button className="w-100" variant="outline-dark">Click here for Checkout</Button></NavLink>
      </Card.Body>
    </Card>
  );
};

export default Details;
