import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./Details.module.css";
import { HiStar } from "react-icons/hi";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { FaDownload } from "react-icons/fa";


const Details = () => {
  const details = useLoaderData();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:details.category_name,
  });

  return (
    <Card ref={componentRef} className="w-75 mx-auto">
      <Card.Header className="text-center d-flex justify-content-between">
        <h3>{details.category_name}</h3>
        <Button
          variant="outline-dark"
          onClick={handlePrint}
          className="print__button gap-2 d-flex align-items-center"
        ><FaDownload></FaDownload> Download PDF
        </Button>
      </Card.Header>

      <Card.Img
        variant="top"
        src={details.img}
        className={`${style.card} rounded-0`}
      />
      <Card.Body>
        <Card.Title>Details about this course:</Card.Title>
        <Card.Text>{details.details}</Card.Text>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <HiStar></HiStar>
            <p className="mb-0">{details.ratings}</p>
          </div>
          <h5>Price: {details.price}</h5>
        </div>
        <NavLink to={`/course/details/checkout/${details._id}`}>
          <Button className="w-100" variant="outline-dark">
            Get Premium Access
          </Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default Details;
