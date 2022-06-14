import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/filter-navbar.css";
import womenShirt from '../images/women-shirts.jpg'
import womenPants from '../images/women-pants.jpg'
import menShirts from "../images/men-shirt.jpg"
import menPants from "../images/men-pants.jpg"
import menWatchs from "../images/men-watch.jpg"
import womenWatchs from "../images/women-watch.jpg"
import remoteCar from "../images/remote-car.jpg"
import rubikCube from "../images/rubiks-cube.jpg"
import cricket from "../images/cricket.jpg"
import hockey from "../images/hockey.jpg"
import menShoes from "../images/men-shoes.jpg"
import ladiesShoes from "../images/ladies-shoes.jpg"
import menBags from "../images/men-bag.jpg"
import womenBags from "../images/women-bags.jpg"
import jewelry1 from "../images/jewelry1.jpg"
import jewelry2 from "../images/jewelry2.jpg"
import law from "../images/law.jpg"
import novel from "../images/novel.jpg"



const FilterNavbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="wrapper">
          <div className="logo">
            <Link to="#">Filters</Link>
          </div>
          <input type="radio" name="slide" id="menu-btn" />
          <input type="radio" name="slide" id="cancel-btn" />
          <ul className="nav-links">
            <label for="cancel-btn" className="btn cancel-btn">
              <i className="fas fa-times"></i>
            </label>

            {/* <!-- Women Garments --> */}
            <li>
              <Link to="#" className="desktop-item">
                Women Garments <i className="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Women Garments <i className="arrow down"></i>
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={womenShirt} alt="" />
                  </div>
                  <div className="row">
                    <header>Shirts</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Dress Shirts</Link>
                      </li>
                      <li>
                        <Link to="#">Office Shirts</Link>
                      </li>
                      <li>
                        <Link to="#">Chambray Shirts</Link>
                      </li>
                      <li>
                        <Link to="#">T Shirts</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <img src={womenPants} alt="" />
                  </div>
                  <div className="row">
                    <header>Pants</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Jeans</Link>
                      </li>
                      <li>
                        <Link to="#">Loose Fit</Link>
                      </li>
                      <li>
                        <Link to="#">Regular Fit</Link>
                      </li>
                      <li>
                        <Link to="#">Trousers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Men Garments --> */}
            <li>
              <Link to="#" className="desktop-item">
                Men Garments <i className="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Men Garments <i className="arrow down"></i>
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={menShirts} alt="" />
                  </div>
                  <div className="row">
                    <header>Shirts</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Dress Shirts</Link>
                      </li>
                      <li>
                        <Link to="#">Office Shirts</Link>
                      </li>
                      <li>
                        <Link to="#">Chambray Shirts</Link>
                      </li>
                      <li>
                        <Link to="#">T Shirts</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <img src={menPants} alt="" />
                  </div>
                  <div className="row">
                    <header>Pants</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Jeans</Link>
                      </li>
                      <li>
                        <Link to="#">Dress Pants</Link>
                      </li>
                      <li>
                        <Link to="#">Trousers</Link>
                      </li>
                      <li>
                        <Link to="#">Slim Fit</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Watches --> */}
            <li>
              <Link to="#" className="desktop-item">
                Watches <i className="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Watches <i className="arrow down"></i>
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={menWatchs} alt="" />
                  </div>
                  <div className="row">
                    <header>Men</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Digital Watch</Link>
                      </li>
                      <li>
                        <Link to="#">Analog Watch</Link>
                      </li>
                      <li>
                        <Link to="#">Smart Watch</Link>
                      </li>
                      <li>
                        <Link to="#">Dress Watch</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <img src={womenWatchs} alt="" />
                  </div>
                  <div className="row">
                    <header>Women</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Casual Watch</Link>
                      </li>
                      <li>
                        <Link to="#">Sport Watch</Link>
                      </li>
                      <li>
                        <Link to="#">Work Watch</Link>
                      </li>
                      <li>
                        <Link to="#">Luxury Watch</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Toys --> */}
            <li>
              <Link to="#" className="desktop-item">
                Toys <i className="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Toys <i className="arrow down"></i>
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={remoteCar} alt="" />
                  </div>
                  <div className="row">
                    <header>Electronic</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Remote Car</Link>
                      </li>
                      <li>
                        <Link to="#">Drone</Link>
                      </li>
                      <li>
                        <Link to="#">Plane</Link>
                      </li>
                      <li>
                        <Link to="#">Dancing Doll</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <img src={rubikCube} alt="" />
                  </div>
                  <div className="row">
                    <header>Non-Electric</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Teddy Bear</Link>
                      </li>
                      <li>
                        <Link to="#">Barbie Doll</Link>
                      </li>
                      <li>
                        <Link to="#">Rubik Cube</Link>
                      </li>
                      <li>
                        <Link to="#">Spinner</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Sports --> */}
            <li>
              <Link to="#" className="desktop-item">
                Sports <i className="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Sports <i className="arrow down"></i>
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={cricket} alt="" />
                  </div>
                  <div className="row">
                    <header>Cricket</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Bat</Link>
                      </li>
                      <li>
                        <Link to="#">Ball</Link>
                      </li>
                      <li>
                        <Link to="#">Helmet</Link>
                      </li>
                      <li>
                        <Link to="#">Gloves</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <img src={hockey} alt="" />
                  </div>
                  <div className="row">
                    <header>Hockey</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Helmet</Link>
                      </li>
                      <li>
                        <Link to="#">Skates</Link>
                      </li>
                      <li>
                        <Link to="#">Neck Protector</Link>
                      </li>
                      <li>
                        <Link to="#">Leg Pads</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Shoes --> */}
            <li>
              <Link to="#" className="desktop-item">
                Shoes <i className="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Shoes <i className="arrow down"></i>
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={menShoes} alt="" />
                  </div>
                  <div className="row">
                    <header>Men Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Running Shoes</Link>
                      </li>
                      <li>
                        <Link to="#">Formals</Link>
                      </li>
                      <li>
                        <Link to="#">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="#">Army Boots</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <img src={ladiesShoes} alt="" />
                  </div>
                  <div className="row">
                    <header>Ladies Shoes</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Running Shoes</Link>
                      </li>
                      <li>
                        <Link to="#">Formals</Link>
                      </li>
                      <li>
                        <Link to="#">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="#">Cone Heel</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Bags --> */}
            <li>
              <Link to="#" className="desktop-item">
                Bags <i className="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Bags <i className="arrow down"></i>
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={menBags} alt="" />
                  </div>
                  <div className="row">
                    <header>Male</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">School Bags</Link>
                      </li>
                      <li>
                        <Link to="#">Suitcase</Link>
                      </li>
                      <li>
                        <Link to="#">Bag pack</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <img src={womenBags} alt="" />
                  </div>
                  <div className="row">
                    <header>Female</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">School Bags</Link>
                      </li>
                      <li>
                        <Link to="#">Suitcase</Link>
                      </li>
                      <li>
                        <Link to="#">Bag Pack</Link>
                      </li>
                      <li>
                        <Link to="#">Hand Bags</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Jewelry --> */}
            <li>
              <Link to="#" className="desktop-item">
                Jewelry <i className="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Jewelry <i className="arrow down"></i>
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={jewelry1} alt="" />
                  </div>
                  <div className="row">
                    <header>Hand Jewelry</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Bangles</Link>
                      </li>
                      <li>
                        <Link to="#">Rings</Link>
                      </li>
                      <li>
                        <Link to="#">Bracelets</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <img src={jewelry2} alt="" />
                  </div>
                  <div className="row">
                    <header>Neck Jewelry</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Lockets</Link>
                      </li>
                      <li>
                        <Link to="#">Necklaces</Link>
                      </li>
                      <li>
                        <Link to="#">Traditional</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Books --> */}
            <li>
              <Link to="#" className="desktop-item">
                Books <i className="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Books <i className="arrow down"></i>
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={law} alt="" />
                  </div>
                  <div className="row">
                    <header>Law</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Human Rights</Link>
                      </li>
                      <li>
                        <Link to="#">Labour</Link>
                      </li>
                      <li>
                        <Link to="#">Philosophy</Link>
                      </li>
                      <li>
                        <Link to="#">Criminal Procedure</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <img src={novel} alt="" />
                  </div>
                  <div className="row">
                    <header>Novels</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Classic</Link>
                      </li>
                      <li>
                        <Link to="#">Horror</Link>
                      </li>
                      <li>
                        <Link to="#">Kidnapping</Link>
                      </li>
                      <li>
                        <Link to="#">Romantic</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <label for="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </>
  );
};

export default FilterNavbar;
