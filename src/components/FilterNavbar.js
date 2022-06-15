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



const FilterNavbar = (props) => {
  const handleClick = (e) => {
    console.log("Filter Navbar category: " + e.target.value);
    props.handleNavbarFilters(e.target.value);
  }
  return (
    <>
      <nav className="nav-bar">
        <div className="wrapper">
          <div className="logo">
            <Link to="#" >Filters</Link>
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
                        <button onClick={handleClick} value="Dress Shirts" className="nav-btn">Dress Shirts</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Office Shirts" className="nav-btn">Office Shirts</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Chambray Shirts" className="nav-btn">Chambray Shirts</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="T Shirts" className="nav-btn">T Shirts</button>
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
                        <button onClick={handleClick} value="Jeans" className="nav-btn">Jeans</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Loose Fit" className="nav-btn">Loose Fit</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Regular Fit" className="nav-btn">Regular Fit</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Trousers" className="nav-btn">Trousers</button>
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
                        <button onClick={handleClick} value="Dress Shirts" className="nav-btn">Dress Shirts</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Office Shirts" className="nav-btn">Office Shirts</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Chambray Shirts" className="nav-btn">Chambray Shirts</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="T Shirts" className="nav-btn">T Shirts</button>
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
                        <button onClick={handleClick} value="Jeans" className="nav-btn">Jeans</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Dress Pants" className="nav-btn">Dress Pants</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Trousers" className="nav-btn">Trousers</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Slim Fit" className="nav-btn">Slim Fit</button>
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
                        <button onClick={handleClick} value="Digital Watch" className="nav-btn">Digital Watch</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Analog Watch" className="nav-btn">Analog Watch</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Smart Watch" className="nav-btn">Smart Watch</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Dress Watch" className="nav-btn">Dress Watch</button>
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
                        <button onClick={handleClick} value="Casual Watch" className="nav-btn">Casual Watch</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Sport Watch" className="nav-btn">Sport Watch</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Work Watch" className="nav-btn">Work Watch</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Luxury Watch" className="nav-btn">Luxury Watch</button>
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
                        <button onClick={handleClick} value="Remote Car" className="nav-btn">Remote Car</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Drone" className="nav-btn">Drone</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Plane" className="nav-btn">Plane</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Dancing Doll" className="nav-btn">Dancing Doll</button>
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
                        <button onClick={handleClick} value="Teddy Bear" className="nav-btn">Teddy Bear</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Barbie Doll" className="nav-btn">Barbie Doll</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Rubik Cube" className="nav-btn">Rubik Cube</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Spinner" className="nav-btn">Spinner</button>
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
                        <button onClick={handleClick} value="Bat" className="nav-btn">Bat</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Ball" className="nav-btn">Ball</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Helmet" className="nav-btn">Helmet</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Gloves" className="nav-btn">Gloves</button>
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
                        <button onClick={handleClick} value="Helmet" className="nav-btn">Helmet</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Skates" className="nav-btn">Skates</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Neck Protector" className="nav-btn">Neck Protector</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Leg Pads" className="nav-btn">Leg Pads</button>
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
                        <button onClick={handleClick} value="Running Shoes" className="nav-btn">Running Shoes</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Formals" className="nav-btn">Formals</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Sneakers" className="nav-btn">Sneakers</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Army Boots" className="nav-btn">Army Boots</button>
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
                        <button onClick={handleClick} value="Running Shoes" className="nav-btn">Running Shoes</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Formals" className="nav-btn">Formals</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Sneakers" className="nav-btn">Sneakers</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Cone Heel" className="nav-btn">Cone Heel</button>
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
                        <button onClick={handleClick} value="School Bags" className="nav-btn">School Bags</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Suitcase" className="nav-btn">Suitcase</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Bag pack" className="nav-btn">Bag pack</button>
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
                        <button onClick={handleClick} value="School Bags" className="nav-btn">School Bags</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Suitcase" className="nav-btn">Suitcase</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Bag Pack" className="nav-btn">Bag Pack</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Hand Bags" className="nav-btn">Hand Bags</button>
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
                        <button onClick={handleClick} value="Bangles" className="nav-btn">Bangles</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Rings" className="nav-btn">Rings</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Bracelets" className="nav-btn">Bracelets</button>
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
                        <button onClick={handleClick} value="Lockets" className="nav-btn">Lockets</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Necklaces" className="nav-btn">Necklaces</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Traditional" className="nav-btn">Traditional</button>
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
                        <button onClick={handleClick} value="Human Rights" className="nav-btn">Human Rights</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Labour" className="nav-btn">Labour</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Philosophy" className="nav-btn">Philosophy</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Criminal Procedure" className="nav-btn">Criminal Procedure</button>
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
                        <button onClick={handleClick} value="Classic" className="nav-btn">Classic</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Horror" className="nav-btn">Horror</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Kidnapping" className="nav-btn">Kidnapping</button>
                      </li>
                      <li>
                        <button onClick={handleClick} value="Romantic" className="nav-btn">Romantic</button>
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
