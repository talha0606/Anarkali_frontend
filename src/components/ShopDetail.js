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

  const callSellerPage = async () => {
    try {
      const res = await fetch(
        `/shopinfo?sellerid=${localStorage.getItem("id")}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data);
      setshopName(data[0].sName);
      setshopDescription(data[0].sDescription);
      setshopAddress(data[0].address);
      setshopEmail(data[0].email);
      //   setshopImage(data[0].shopImage);
      setshopImage(data[0].imageUrl);
    } catch (err) {
      history.push("/login");
    }
  };

  useEffect(() => {
    console.log("sellerid " + localStorage.getItem("id"));
    callSellerPage();
  }, []);

  //   const changeid = () => setId(localStorage.getItem("id"));

  return (
    <>
      <div className="container-fluid">
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
              <span class="mt-1 clearfix">{shopaddress}</span>
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
              <hr class="line" /> <small class="mt-4">{shopDescription}</small>
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
              </div>
              {/* <div class="profile mt-5">
                            <button class="profile_button px-5">View profile</button>
                        </div> */}
            </div>
          </div>
        </div>
        <div className="container products shopProd">
          <h2 className="shopH2">Our Products</h2>
          <div className="product-list">{<ShopProduct id={idd} />}</div>
        </div>
      </div>
    </>
  );
}

export default ShopDetail;
