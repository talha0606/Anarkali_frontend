import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/filter-navbar.css";

const FilterNavbar = () => {
  return (
    <>
      {/* body */}
      <nav>
        <div class="wrapper">
          {/* <!-- <div class="logo"><a href="#">Anarkali</a></div> --> */}
          <ul class="nav-links">
            <li>
              <a href="#">Beauty & Personal Care </a>
              <ul class="drop-menu">
                <li>
                  <a href="#">Personal Care</a>
                </li>
                <li>
                  <a href="#">Foot & Hand Care</a>
                </li>
                <li>
                  <a href="#">Shampoos</a>
                </li>
                <li>
                  <a href="#">Styling Products</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Baby & Kids</a>
              <div class="mega-box">
                <div class="content">
                  <div class="row">
                    <img src="img.jpg" alt="" />
                  </div>
                  <div class="row">
                    <header>Design Services</header>
                    <ul class="mega-links">
                      <a class="dropdown-item" href="#">
                        Baby Pools
                      </a>
                      <a class="dropdown-item" href="#">
                        Kids Clothings
                      </a>
                      <a class="dropdown-item" href="#">
                        Kids Costumes
                      </a>
                      <a class="dropdown-item" href="#">
                        Toys & Games
                      </a>
                      <a class="dropdown-item" href="#">
                        Toys for Girls
                      </a>

                      {/* <!-- <li><a href="#">Graphics</a></li>
                    <li><a href="#">Vectors</a></li>
                    <li><a href="#">Business cards</a></li>
                    <li><a href="#">Custom Logo</a></li> --> */}
                    </ul>
                  </div>
                  <div class="row">
                    <header>Email Services</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Personal Email</a>
                      </li>
                      <li>
                        <a href="#">Business Email</a>
                      </li>
                      <li>
                        <a href="#">Mobile</a>
                      </li>
                      <li>
                        <a href="#">Web Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div class="row">
                    <header>Security Services</header>
                    <ul class="mega-links">
                      <li>
                        <a href="#">Site Seal</a>
                      </li>
                      <li>
                        <a href="#">VPS Hosting</a>
                      </li>
                      <li>
                        <a href="#">Privacy Seal</a>
                      </li>
                      <li>
                        <a href="#">Website design</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">Men's Section</a>
              <ul class="drop-menu">
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Women's Section</a>
              <ul class="drop-menu">
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Sports</a>
              <ul class="drop-menu">
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Islamic Products</a>
              <ul class="drop-menu">
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Stationary Items</a>
              <ul class="drop-menu">
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Electronic Accessories</a>
              <ul class="drop-menu">
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Home Appliances</a>
              <ul class="drop-menu">
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                AUTOMOBILE
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Car Polsih & Sprays</a>
                <a class="dropdown-item" href="#">Engine Oils</a>
                <a class="dropdown-item" href="#">Keychains</a>
              </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  BEAUTY & PERSONAL CARE
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Personal Care</a>
                  <a class="dropdown-item" href="#">Foot & Hand Care</a>
                  <a class="dropdown-item" href="#">Shampoos</a>
                  <a class="dropdown-item" href="#">Styling Products</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  BABY & KIDS
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Baby Pools</a>
                  <a class="dropdown-item" href="#">Kids Clothings</a>
                  <a class="dropdown-item" href="#">Kids Costumes</a>
                  <a class="dropdown-item" href="#">Toys & Games</a>
                  <a class="dropdown-item" href="#">Toys for Girls</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  MEN's SECTION
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Jackets & Coats For Men</a>
                  <a class="dropdown-item" href="#">Men's Garments</a>
                  <a class="dropdown-item" href="#">Men's Grooming</a>
                  <a class="dropdown-item" href="#">Traditional Wear</a>
                  <a class="dropdown-item" href="#">Wallets & Cards Holders</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  WOMEN's SECTION
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Ladies Bags</a>
                  <a class="dropdown-item" href="#">Ladies Purse</a>
                  <a class="dropdown-item" href="#">Ladies Purse</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Muslim Wear</a>
                  <a class="dropdown-item" href="#">Women's Fashion Clothes</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Women Jackets & Coats</a>
                  <a class="dropdown-item" href="#">Shapewear</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  SPORTS
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Cricket</a>
                  <a class="dropdown-item" href="#">Football</a>
                  <a class="dropdown-item" href="#">Badminton</a>
                  <a class="dropdown-item" href="#">Exercise & Fitness</a>
                  <a class="dropdown-item" href="#">Outdoor Games</a>
                  <a class="dropdown-item" href="#">SportsWear</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ISLAMIC PRODUCTS
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Islamic Books</a>
                  <a class="dropdown-item" href="#">Islamic Digital Devices</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  STATIONARY ITEMS
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Art Supplies</a>
                  <a class="dropdown-item" href="#">Paper & Notebooks</a>
                  <a class="dropdown-item" href="#">School Supplies</a>
                  <a class="dropdown-item" href="#">Writing Tools</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ELECTRONICS ACCESSORIES
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Computer Components</a>
                  <a class="dropdown-item" href="#">Mobile Accessories</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  HOME ACCESSORIES
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Cooling & Heating</a>
                  <a class="dropdown-item" href="#">Appliances</a>
                  <a class="dropdown-item" href="#">Parts & Accessories</a>
                  <a class="dropdown-item" href="#">Small Kitchen Appliances</a>
                </div>
              </li>
            
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default FilterNavbar;
