import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <nav className="navbar navbar-expand-md navbar-light bg-white bg-body shadow-sm m-0 p-1">
          <div className="container">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  aria-current="page"
                  to="/"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  aria-current="page"
                  to="/"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  aria-current="page"
                  to="/"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  aria-current="page"
                  to="/"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  aria-current="page"
                  to="/"
                >
                  <FaGooglePlusG />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link-light"
                  aria-current="page"
                  to="/"
                >
                  <FaEnvelope />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row footer-padding footer-style">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white footer-style">
            <p> @ 2022, Anarkali Bazar, Lhr. </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
