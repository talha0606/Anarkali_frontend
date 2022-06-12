import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/filter-navbar.css";

const FilterNavbar = () => {
  return (
    <>
      <nav>
        <div class="wrapper">
          <div class="logo">
            <Link to="#">Anarkali-Bazar</Link>
          </div>
          <input type="radio" name="slide" id="menu-btn" />
          <input type="radio" name="slide" id="cancel-btn" />
          <ul class="nav-links">
            <label for="cancel-btn" class="btn cancel-btn">
              <i class="fas fa-times"></i>
            </label>

            {/* <!-- Women Garments --> */}
            <li>
              <Link to="#" class="desktop-item">
                Women Garments <i class="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Women Garments <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="../images/women-shirts.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Shirts</header>
                    <ul class="mega-links">
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
                  <div class="row">
                    <img src="../images/women-pants.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Pants</header>
                    <ul class="mega-links">
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
              <Link to="#" class="desktop-item">
                Men Garments <i class="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Men Garments <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="../images/men-shirt.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Shirts</header>
                    <ul class="mega-links">
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
                  <div class="row">
                    <img src="../images/men-pants.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Pants</header>
                    <ul class="mega-links">
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
              <Link to="#" class="desktop-item">
                Watches <i class="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Watches <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="../images/men-watch.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Men</header>
                    <ul class="mega-links">
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
                  <div class="row">
                    <img src="../images/women-watch.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Women</header>
                    <ul class="mega-links">
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
              <Link to="#" class="desktop-item">
                Toys <i class="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Toys <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="../images/remote-car.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Electronic</header>
                    <ul class="mega-links">
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
                  <div class="row">
                    <img src="../images/rubiks-cube.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Non-Electric</header>
                    <ul class="mega-links">
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
              <Link to="#" class="desktop-item">
                Sports <i class="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Sports <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="../images/cricket.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Cricket</header>
                    <ul class="mega-links">
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
                  <div class="row">
                    <img src="../images/hockey.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Hockey</header>
                    <ul class="mega-links">
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
              <Link to="#" class="desktop-item">
                Shoes <i class="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Shoes <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="../images/men-shoes.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Men Shoes</header>
                    <ul class="mega-links">
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
                  <div class="row">
                    <img src="../images/ladies-shoes.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Ladies Shoes</header>
                    <ul class="mega-links">
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
              <Link to="#" class="desktop-item">
                Bags <i class="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Bags <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="../images/men-bag.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Male</header>
                    <ul class="mega-links">
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
                  <div class="row">
                    <img src="../images/bags.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Female</header>
                    <ul class="mega-links">
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
              <Link to="#" class="desktop-item">
                Jewellery <i class="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Jewellery <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="../images/jewelry1.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Hand Jewellery</header>
                    <ul class="mega-links">
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
                  <div class="row">
                    <img src="../images/jewelry2.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Neck Jewellery</header>
                    <ul class="mega-links">
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
              <Link to="#" class="desktop-item">
                Books <i class="arrow down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Books <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="../images/law.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Law</header>
                    <ul class="mega-links">
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
                  <div class="row">
                    <img src="../images/novel.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Novels</header>
                    <ul class="mega-links">
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
          <label for="menu-btn" class="btn menu-btn">
            <i class="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </>
  );
};

export default FilterNavbar;
