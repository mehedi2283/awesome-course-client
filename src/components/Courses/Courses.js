import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Courses = () => {
  
  return (
    // <div ">
      <Row>
        <Col lg="3">
          <LeftSideNav></LeftSideNav>
        </Col>
        <Col lg="9">
          <Outlet></Outlet>
        </Col>
      </Row>
    // </div>
  );
};

export default Courses;
