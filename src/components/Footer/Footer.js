import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Button } from 'react-bootstrap';

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 bg-light mt-3 footer">
    <div className="container-fluid text-center text-md-left ">
      <div className="row justify-content-around align-items-center">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Awesome Course</h5>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className=" text-underline"> Our Socials</h5>
          <hr />
          <div className="list-unstyled d-flex justify-content-evenly">
            <Link className=" facebook bg-light  rounded p-1">
              
                <FaFacebook
                  className="fs-2 "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Follow us on FaceBook"
                ></FaFacebook>
                <h5 className="">Facebook</h5>
              
            </Link>
            <Link className=" twitter  rounded p-1">
              
                <FaTwitter
                  className="fs-2 "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Follow us on Twitter"
                ></FaTwitter>
                <h5 className="">Twitter</h5>
              
            </Link>
            <Link className=" whatsapp bg-light  rounded p-1">
              
                <FaWhatsapp
                  className="fs-2 "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Follow us on Whatsapp"
                ></FaWhatsapp>
                <h5>Whatsapp</h5>
              
            </Link>
            <Link className=" twitch bg-light  rounded p-1">
              
                <FaTwitch
                  className="fs-2 "
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Follow us on Twitch"
                ></FaTwitch>
                <h5 className="">Twitch</h5>
              
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <Link to="./home"> Awesome_Course.com</Link>
    </div>
  </footer>
);

export default Footer;
