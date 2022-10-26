import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import LeftSideNav from "../components/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
     
        <Container className="">
          <Outlet></Outlet>
        </Container>
      
      <Footer></Footer>
    </div>
  );
};

export default Main;
