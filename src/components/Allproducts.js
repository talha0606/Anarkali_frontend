import React, { useState, useEffect } from "react";
import DetailproductPage from "../components/DetailproductPage";
import { Link } from "react-router-dom";
import ShopDetail from "../components/ShopDetail";
// import { Link, useLocation, useParams, useHistory } from "react-router-dom";
import "../style/allshops.css";
import "../style/shopCards.css";

import { Button } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
import Map from "./Map";

import { Rating } from "@material-ui/lab";

import { useAlert } from "react-alert";
import { addItemsToCart } from "../actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
// import { Button } from "@material-ui/core";

// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaGooglePlusG,
//   FaEnvelope,
//   FaYoutube,
//   FaLinkedin,
// } from "react-icons/fa";
// import { SiFacebook, SiGmail } from "react-icons/si";

// function MyVerticallyCenteredModal(props) {
// return (
// <Modal
//   {...props}
//   size="lg"
//   aria-labelledby="contained-modal-title-vcenter"
//   centered
// >
//   <Modal.Header closeButton>
//     <Modal.Title id="contained-modal-title-vcenter">
//       Address of 'Shop Name'
//     </Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//   <h4>Email</h4>
//   <div className="MapDiv">
//     {/* <Map ></Map> */}
//   </div>

//     <div className="social-buttons mt-5">
//             <button className="neo-button">
//               <FaFacebookF />
//             </button>
//             <button className="neo-button">
//               <SiGmail />
//             </button>
//             <button className="neo-button">
//               <FaYoutube />
//             </button>
//             <button className="neo-button">
//               <FaLinkedin />
//             </button>
//             <button className="neo-button">
//               <FaTwitter />
//             </button>
//           </div>

//   </Modal.Body>
//   <Modal.Footer>
//     <Button onClick={props.onHide}>Close</Button>
//   </Modal.Footer>
// </Modal>
// );
// }

// for less data in card
function showLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

const Allproducts = ({ filteredProducts }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  console.log(`in all products ${filteredProducts}`);
  //   const [id, setID] = useState(null);
  //   const [modalShow, setModalShow] = React.useState(false);
  const [myproducts, setMyProducts] = useState();

  const Myprod = async () => {
    try {
      const res = await fetch(`/product/allproducts`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({ filters: filters }),
        //credentials: "include",
      });

      const data = await res.json();
      console.log("All Products: ", data);
      setMyProducts(data.myproducts);

      console.log(`myproducts: ${data.myproducts}}`);
      // setMyProducts((oldArray) => [...oldArray, data]);

      // if (data.length == 1) {
      //   setMyProducts(data[0]);
      // } else {
      //   setMyProducts(data);
      // }
      //product image
      // setProductImage(data.prodImage);

      //console.log("MyProducts", myproducts);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("home page error" + err);
    }
  };

  useEffect(() => {
    Myprod();
  }, []);

  const addToCartHandler = (prodId, quantity) => {
    dispatch(addItemsToCart(prodId, quantity));
    alert.success("Item Added To Cart");
  };

  if (filteredProducts == null) {
    return (
      <>
        <div className="container">
          <div className="row no-gutters">
            {myproducts?.map((prod) => (
              <div className="col-sm-6 col-md-4 col-lg-3 ">
                <div className="card">
                  {/* <a
                  onClick={() => {
                    setID(shop._id);
                    console.log(shop.shopImage);
                  }} */}
                  {/* > */}
                  <Link to={`/productDetail/${prod._id}`}>
                    <img
                      // src={`/uploads/${shop.shopImage}`}
                      src={prod.prodImage}
                      className="home-card-img-top card-img img-thumbnail"
                      alt="Card image cap"
                      //   onClick={() => {
                      //     setID(user._id);
                      //   }}
                    />
                  </Link>
                  {/* </a> */}
                  {/* {console.log("id change" + id)}.... */}
                  <div className="card-body">
                    <div className="grid-container">
                      <div className="item1">
                        <h6 className="card-title nopadding">sName</h6>
                      </div>
                      <div className="item2 .bg-success.bg-gradient">
                        <p className="card-text bg-success">category</p>
                      </div>
                      <div className="item3">Email</div>
                      <div className="item4">Rating</div>
                      <div className="item5">Button</div>
                    </div>
                    <h6 className="card-title nopadding">{prod.pName} 12</h6>
                    <div className="clearfix mb-3">
                      <span className="float-start badge rounded  text-success p-0">
                        Rs.{prod.price}
                      </span>
                      <div className="rating">
                        {/* <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star grey" aria-hidden="true"></i> */}
                        <div>
                          <Rating
                            size="medium"
                            value={prod.ratings}
                            readOnly={true}
                            precision={0.5}
                          />
                        </div>
                        <div>
                          <span className="rating_span">
                            {" "}
                            ({prod.numOfReviews} Reviews)
                          </span>
                        </div>
                      </div>
                      {/* 
                    <span className="float-end">
                      <a
                        href="#"
                        className="small text-muted text-uppercase aff-link"
                      > 
                        rating
                      </a>
                    </span> */}
                    </div>
                    {/* <p className="card-text shop-email fw-bold">{shop.email}</p> ....*/}
                    {/* <div className="phone-number lead">0323-2323454</div>...... */}
                    {/* <Button */}
                    {/* <Link to={`/map/${shop._id}`}>...... */}
                    {/* // to={`/`} */}
                    {/* // to={{ */}
                    {/* //   pathname: "{`/map/${shop._id}`}",
                    //   state: { modal: true },
                    // }} */}
                    {/* < */}
                    {/* <div className="btn btn-success btn-sm">....... */}
                    {/* // onClick={() => setModalShow(true)} */}
                    {/* > */}
                    Shop Address
                    {/* </div>..... */}
                    {/* </Link>..... */}
                    {/* </Button> */}
                    {/* <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col col-lg-2 detail" id="hideme">
            {/* {id && <DetailproductPage id={id} setID={setID} />} */}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row no-gutters">
            {filteredProducts?.map((prod) => (
              <div className="col-3 col-* ">
                <div className="card">
                  <div className="imgBx">
                    {/* <Link to={`/productDetail/${prod._id}`}> */}
                    <img
                      // src={`/uploads/${shop.shopImage}`}
                      src={prod.prodImage}
                      alt="Card image cap"
                      //   onClick={() => {
                      //     setID(user._id);
                      //   }}
                    />
                    {/* </Link> */}
                    <ul className="action">
                      {/* <div className="all-shops-wish">
                        <li>
                          <i
                            className="fa fa-heart"
                            aria-hidden="true"
                          ></i>
                          <span>Add to Wishlist</span>
                        </li>
                      </div> */}
                      {/* <Button
                        // disabled={product.Stock < 1 ? true : false}
                        onClick={addToCartHandler}
                      > */}
                      <li
                        disabled={prod.stock < 1 ? true : false}
                        onClick={() => addToCartHandler(prod._id, 1)}
                      >
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        <span>Add To Cart</span>
                      </li>

                      {/* </Button> */}
                      <Link
                        to={`/productDetail/${prod._id}`}
                        className="all-shops-view-Details"
                      >
                        <li>
                          <i className="fa fa-eye " aria-hidden="true"></i>
                          <span>View Details</span>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="content">
                    <div className="productName">
                      <h3>{prod.pName}</h3>
                    </div>
                    <div className="price_rating">
                      <h3>Rs. {prod.price}</h3>
                      <div className="rating">
                        {/* <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star grey" aria-hidden="true"></i> */}
                        <div>
                          <Rating
                            size="medium"
                            value={prod.ratings}
                            readOnly={true}
                            precision={0.5}
                          />
                        </div>
                        <div>
                          <span className="rating_span">
                            {" "}
                            ({prod.numOfReviews} Reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Allproducts;
