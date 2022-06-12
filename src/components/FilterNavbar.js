import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/filter-navbar.css";

const FilterNavbar = () => {
  return (
    <>
      <nav>
        <div class="wrapper">
          <div class="logo">
            <a href="#">Anarkali-Bazar</a>
          </div>
          <input type="radio" name="slide" id="menu-btn" />
          <input type="radio" name="slide" id="cancel-btn" />
          <ul class="nav-links">
            <label for="cancel-btn" class="btn cancel-btn">
              <i class="fas fa-times"></i>
            </label>

            {/* <!-- Women Garments --> */}
            <li>
              <a href="#" class="desktop-item">
                Women Garments <i class="arrow down"></i>
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Women Garments <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="women-shirts.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Shirts</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Dress Shirts</a>
                      </li>
                      <li>
                        <a href="#">Office Shirts</a>
                      </li>
                      <li>
                        <a href="#">Chambray Shirts</a>
                      </li>
                      <li>
                        <a href="#">T Shirts</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <img src="women-pants.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Pants</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Loose Fit</a>
                      </li>
                      <li>
                        <a href="#">Regular Fit</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Men Garments --> */}
            <li>
              <a href="#" class="desktop-item">
                Men Garments <i class="arrow down"></i>
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Men Garments <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="men-shirt.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Shirts</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Dress Shirts</a>
                      </li>
                      <li>
                        <a href="#">Office Shirts</a>
                      </li>
                      <li>
                        <a href="#">Chambray Shirts</a>
                      </li>
                      <li>
                        <a href="#">T Shirts</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <img src="men-pants.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Pants</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Dress Pants</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">Slim Fit</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Watches --> */}
            <li>
              <a href="#" class="desktop-item">
                Watches <i class="arrow down"></i>
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Watches <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="men-watch.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Men</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Digital Watch</a>
                      </li>
                      <li>
                        <a href="#">Analog Watch</a>
                      </li>
                      <li>
                        <a href="#">Smart Watch</a>
                      </li>
                      <li>
                        <a href="#">Dress Watch</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <img src="women-watch.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Women</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Casual Watch</a>
                      </li>
                      <li>
                        <a href="#">Sport Watch</a>
                      </li>
                      <li>
                        <a href="#">Work Watch</a>
                      </li>
                      <li>
                        <a href="#">Luxury Watch</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Toys --> */}
            <li>
              <a href="#" class="desktop-item">
                Toys <i class="arrow down"></i>
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Toys <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="remote-car.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Electronic</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Remote Car</a>
                      </li>
                      <li>
                        <a href="#">Drone</a>
                      </li>
                      <li>
                        <a href="#">Plane</a>
                      </li>
                      <li>
                        <a href="#">Dancing Doll</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <img src="rubiks-cube.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Non-Electric</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Teddy Bear</a>
                      </li>
                      <li>
                        <a href="#">Barbie Doll</a>
                      </li>
                      <li>
                        <a href="#">Rubik Cube</a>
                      </li>
                      <li>
                        <a href="#">Spinner</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Sports --> */}
            <li>
              <a href="#" class="desktop-item">
                Sports <i class="arrow down"></i>
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Sports <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="cricket.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Cricket</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Bat</a>
                      </li>
                      <li>
                        <a href="#">Ball</a>
                      </li>
                      <li>
                        <a href="#">Helmet</a>
                      </li>
                      <li>
                        <a href="#">Gloves</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <img src="hockey.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Hockey</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Helmet</a>
                      </li>
                      <li>
                        <a href="#">Skates</a>
                      </li>
                      <li>
                        <a href="#">Neck Protector</a>
                      </li>
                      <li>
                        <a href="#">Leg Pads</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Shoes --> */}
            <li>
              <a href="#" class="desktop-item">
                Shoes <i class="arrow down"></i>
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Shoes <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="men-shoes.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Men Shoes</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Running Shoes</a>
                      </li>
                      <li>
                        <a href="#">Formals</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Army Boots</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <img src="ladies-shoes.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Ladies Shoes</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Running Shoes</a>
                      </li>
                      <li>
                        <a href="#">Formals</a>
                      </li>
                      <li>
                        <a href="#">Sneakers</a>
                      </li>
                      <li>
                        <a href="#">Cone Heel</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Bags --> */}
            <li>
              <a href="#" class="desktop-item">
                Bags <i class="arrow down"></i>
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Bags <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="men-bag.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Male</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">School Bags</a>
                      </li>
                      <li>
                        <a href="#">Suitcase</a>
                      </li>
                      <li>
                        <a href="#">Bag pack</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <img src="bags.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Female</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">School Bags</a>
                      </li>
                      <li>
                        <a href="#">Suitcase</a>
                      </li>
                      <li>
                        <a href="#">Bag Pack</a>
                      </li>
                      <li>
                        <a href="#">Hand Bags</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Jewelry --> */}
            <li>
              <a href="#" class="desktop-item">
                Jewellery <i class="arrow down"></i>
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Jewellery <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="jewelry1.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Hand Jewellery</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Bangles</a>
                      </li>
                      <li>
                        <a href="#">Rings</a>
                      </li>
                      <li>
                        <a href="#">Bracelets</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <img src="jewelry2.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Neck Jewellery</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Lockets</a>
                      </li>
                      <li>
                        <a href="#">Necklaces</a>
                      </li>
                      <li>
                        <a href="#">Traditional</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Books --> */}
            <li>
              <a href="#" class="desktop-item">
                Books <i class="arrow down"></i>
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile-item">
                Books <i class="arrow down"></i>
              </label>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="law.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Law</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Human Rights</a>
                      </li>
                      <li>
                        <a href="#">Labour</a>
                      </li>
                      <li>
                        <a href="#">Philosophy</a>
                      </li>
                      <li>
                        <a href="#">Criminal Procedure</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <img src="novel.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Novels</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Classic</a>
                      </li>
                      <li>
                        <a href="#">Horror</a>
                      </li>
                      <li>
                        <a href="#">Kidnapping</a>
                      </li>
                      <li>
                        <a href="#">Romantic</a>
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
