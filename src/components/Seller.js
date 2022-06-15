import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams, useHistory } from "react-router-dom";
import avatar from "../images/avatar.png";
import MyProducts from "./MyProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlusG,
  FaEnvelope,
} from "react-icons/fa";
import Footer from "./Footer";

const Seller = () => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");
  const [shopaddress, setshopAddress] = useState("");
  const [shopemail, setshopEmail] = useState("");
  const [shopName, setshopName] = useState("");
  const [shopDescription, setshopDescription] = useState("");
  const [shopImage, setshopImage] = useState(avatar);

  const callSellerPage = async () => {
    try {
      const res = await fetch(
        `/shop/shopinfo?sellerid=${localStorage.getItem("id")}`,
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
      setshopImage(data[0].imageUrl);
      // setshopImage(data[0].imageUrl);

      // if (!res.status === 200) {
      //   const error = new Error(res.error);
      //   throw error;
      // }

      // if (res.status === 401) {
      //
      // }
    } catch (err) {
      history.push("/login");
      // console.log("home page error: " + err);
    }
  };

  useEffect(() => {
    console.log("sellerid " + localStorage.getItem("id"));
    callSellerPage();
  }, []);

  const changeid = () => setId(localStorage.getItem("id"));
  return (
    <>
      <div class="container seller-container">
        <div className="shopImg">
          <img
            // src={`/uploads/${shopImage}`}
            src={shopImage}
            alt="profileImg"
            height="200px"
            width="200px"
          />
        </div>

        <div className="shopDetail">
          <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div class="card sellerCard p-4">
              <div class="image d-flex flex-column justify-content-center align-items-center">
                <span class="name mt-3">{shopName}</span>
                <span class="idd">{shopaddress}</span>

                <div className=" d-flex mt-2">
                  <button class="btn btn-sm btn-outline-success m-1">
                    Edit Profile
                  </button>
                </div>
                <div class="text mt-3">
                  <span>{shopDescription}</span>
                </div>
                <div class="text mt-3">
                  <span>{shopemail}</span>
                </div>
                <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                  <span>
                    <Link className="s-link" aria-current="page" to="/">
                      <FaFacebookF />
                    </Link>
                  </span>
                  <span>
                    <Link className="s-link" aria-current="page" to="/">
                      <FaTwitter />
                    </Link>
                  </span>
                  <span>
                    <Link className="s-link" aria-current="page" to="/">
                      <FaGooglePlusG />
                    </Link>
                  </span>
                  <span>
                    <Link className="s-link" aria-current="page" to="/">
                      <FaEnvelope />
                    </Link>
                  </span>
                </div>
                <div class=" px-2 rounded mt-4 date ">
                  <span class="join">Joined May,2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="newProductButton">
          <Link className="btn btn-sm btn-success m-1" to="/addProduct">
            Add New Product
          </Link>
        </div>

        <div className="products">
          <h2>My Products</h2>
          <div className="product-list">
            {<MyProducts id={localStorage.getItem("id")} />}
          </div>
        </div>

        {/* <div className="orders">
          <h2>Your Orders</h2>
          <div className="product-list">
            {<MyProducts id={localStorage.getItem("id")} />}
          </div>
        </div> */}
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Seller;
