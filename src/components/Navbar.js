import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";

// import { UserContext } from "../App";

function Navbar() {
  // const { state, dispatch } = useContext(UserContext);
  if (false) {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-light bg-white bg-body shadow-sm m-0 p-1 sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand p-0" to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#">
                    Features
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#">
                    Pricing
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#">
                    Services
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#">
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className=" nav-item">
                  <Link
                    className="btn btn-sm btn-outline-dark m-1"
                    to="/signup"
                  >
                    SIGN UP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-sm btn-outline-success m-1"
                    to="/logout"
                  >
                    <LogoutIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <div className="nav-bar">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item ms-2">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div> */}
      </>
    );
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-light bg-white bg-body shadow-sm m-0 p-1 sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand p-0" to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#">
                    Services
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="#">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/contactus">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="btn btn-sm btn-outline-success m-1"
                    to="/login"
                  >
                    LOGIN
                  </Link>
                </li>
                <li className=" nav-item">
                  <Link
                    className="btn btn-sm btn-outline-dark m-1"
                    to="/signup"
                  >
                    SIGN UP
                  </Link>
                </li>
                <li className=" nav-item">
                  <Link
                    className="btn btn-sm btn-outline-dark m-1"
                    to="/loginsignup"
                  >
                    Customer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
