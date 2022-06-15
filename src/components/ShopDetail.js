import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import avatar from "../images/avatar.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaEnvelope,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { SiFacebook, SiGmail } from "react-icons/si";
import MyProducts from "./MyProducts";
import ShopProduct from "./ShopProduct";
import { useParams } from "react-router-dom";
import Slider from "@material-ui/core/Slider";

import Pagination from "react-js-pagination";

import "../style/Home.css";
import "../style/pagination.css";
import Checkboxes from "./Checkboxes";
import Checkbox2 from "./Checkbox2";
import axios from "axios";

function ShopDetail() {
  const { shopId } = useParams();
  console.log("Shop Id in Shop Detail: " + shopId);
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [idd, setId] = useState(shopId);
  const [shopaddress, setshopAddress] = useState("");
  const [shopemail, setshopEmail] = useState("");
  const [shopName, setshopName] = useState("");
  const [shopDescription, setshopDescription] = useState("");
  const [shopImage, setshopImage] = useState(avatar);
  const [searchedData, setsearchedData] = useState(null);

  const [novalue, setnovalue] = useState("");

  const [price, setPrice] = useState([0, 25000000000000]);
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  const [searchString, setsearchString] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (novalue === "yes") setnovalue("no");
      else setnovalue("yes");
    }
  };

  // const callSellerPage = async () => {
  //   try {
  //     const res = await fetch(
  //       // `/shopinfo?sellerid=${localStorage.getItem("id")}`,
  //       `/shop/shopinfo?sellerid=${shopId}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const data = await res.json();
  //     console.log(data);
  //     setshopName(data[0].sName);
  //     setshopDescription(data[0].sDescription);
  //     setshopAddress(data[0].address);
  //     setshopEmail(data[0].email);
  //     //   setshopImage(data[0].shopImage);
  //     setshopImage(data[0].imageUrl);
  //   } catch (err) {
  //     history.push("/login");
  //   }
  // };

  // useEffect(() => {
  //   console.log("sellerid " + localStorage.getItem("id"));
  //   callSellerPage();
  // }, []);

  //   const changeid = () => setId(localStorage.getItem("id"));

  const findProducts = async () => {
    if (searchString.replace(/\s/g, "").length != 0) {
      try {
        axios
          .get(`/product/specificshopproducts?name=${searchString}&id=${idd}`)
          .then((res) => {
            setsearchedData(res.data);
            console.log("Specific Shops Product data: " + res.data);
          });
      } catch (err) {
        console.log("catch: " + err);
      }
    } else {
      setsearchedData(null);
    }
  };

  useEffect(() => {
    console.log("Searched Data " + searchedData);

  },[searchedData]);

  return (
    <>
      <div className="container-fluid home-container">
        <div className="row home-top-margin">
          <div className="col-2 p-0 checkbox-hide-for-medium">
            <div className="category-checkbox">
              <h6 className="checkbox-heading price-range-heading">Price</h6>
              <div className="price-range">
                <Slider
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={25000}
                />
              </div>
            </div>
          </div>
          <div className="col-10 p-0 ps-3 ">
            <div className="container-fluid card-container m-0">
              {/* <div className="grid-container"> */}
              <div className="search-portion">
                <div className="a1">
                  <input
                    className="search-box ms-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchString}
                    onChange={(e) => {
                      setsearchString(e.target.value);
                    }}
                    onKeyUp={(e) => {
                      handleKeyPress(e);
                      findProducts();
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="p-3">
              <div className="product-list">{<ShopProduct id={idd} filteredData={searchedData} />}</div>
            </div>
          </div>
        </div>
      </div>
      {/* previous 1*/}
      {/* <div className="container-fluid">
        <div class="container d-flex justify-content-center">
          <div class="card cardShop p-3 py-4">
            <div class="text-center">
              <img
                // src={`/uploads/${shopImage}`}
                src={shopImage}
                width="250"
                class="rounded-circle"
              />
              <h3 class="mt-2">{shopName}</h3>
              <span class="mt-1 clearfix">{shopaddress}</span> */}

      {/* <div class="row mt-3 mb-3">
                            <div class="col-md-4">
                                <h5>Projects</h5> <span class="num">10</span>
                            </div>
                            <div class="col-md-4">
                                <h5>Projects</h5> <span class="num">10</span>
                            </div>
                            <div class="col-md-4">
                                <h5>Projects</h5> <span class="num">10</span>
                            </div>
                        </div> */}

      {/* previous 2*/}

      {/* <hr class="line" /> <small class="mt-4">{shopDescription}</small>
              <div class="social-buttons mt-5">
                <button class="neo-button">
                  <FaFacebookF />
                </button>
                <button class="neo-button">
                  <SiGmail />
                </button>
                <button class="neo-button">
                  <FaYoutube />
                </button>
                <button class="neo-button">
                  <FaLinkedin />
                </button>
                <button class="neo-button">
                  <FaTwitter />
                </button>
              </div> */}
      {/* <div class="profile mt-5">
                            <button class="profile_button px-5">View profile</button>
                        </div> */}

      {/* previous 3*/}

      {/* </div>
          </div>
        </div>
        <div className="container products shopProd">
          <h2 className="shopH2">Our Products</h2>
          <div className="product-list">{<ShopProduct id={idd} />}</div>
        </div>
      </div> */}
    </>
  );
}

export default ShopDetail;
