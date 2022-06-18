import React, { useState } from "react";
import DetailproductPage from "../components/DetailproductPage";
import { Link } from "react-router-dom";
import ShopDetail from "../components/ShopDetail";
// import { Link, useLocation, useParams, useHistory } from "react-router-dom";
import "../style/allshops.css";
import { Button } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
import Map from "./Map";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
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

const Allshops = ({ shopData }) => {
  console.log(`IN all shops data is ${shopData}`);
  const [id, setID] = useState(null);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="container">
        <div className="row no-gutters">
          {shopData?.map((shop) => (
            <div className=" col-sm-6 col-md-4 col-lg-3  ">
              <div className="card">
                {/* <a
                  onClick={() => {
                    setID(shop._id);
                    console.log(shop.shopImage);
                  }} */}
                {/* > */}
                <Link to={`/shopDetail/${shop._id}`}>
                  <img
                    // src={`/uploads/${shop.shopImage}`}
                    src={shop.imageUrl}
                    className="home-card-img-top card-img img-thumbnail"
                    alt="Card cap"
                    //   onClick={() => {
                    //     setID(user._id);
                    //   }}
                  />
                </Link>
                {/* </a> */}
                {console.log("id change" + id)}
                <div className="card-body">
                  {/* <div className="grid-container">
                    <div className="item1"><h6 className="card-title nopadding">{shop.sName}</h6></div>
                    <div className="item2 .bg-success.bg-gradient"><p className="card-text bg-success">category {shop.category}</p></div>
                    <div className="item3">Email</div>
                    <div className="item4">Rating</div>
                    <div className="item5">Button</div>
                  </div> */}
                  <h6 className="card-title nopadding ">{shop.sName}</h6>
                  <div className="clearfix mb-3">
                    <span className="float-start badge rounded  text-success p-0 shop-category">
                      {/* Category */}
                      {shop.category}
                    </span>
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
                  <p className="card-text shop-email">{shop.email}</p>

                  {/* <div className="phone-number lead"><span className="phone-number-icon"><LocalPhoneTwoToneIcon  /></span>0323-2323454</div> */}
                  <div className="lead">+92-{shop.phoneNo}</div>
                  {/* <Button */}
                  <Link to={`/map/${shop._id}`}>
                    {/* // to={`/`} */}

                    {/* // to={{ */}
                    {/* //   pathname: "{`/map/${shop._id}`}",
                    //   state: { modal: true },
                    // }} */}
                    {/* < */}
                    <div className="btn btn-success btn-sm">
                      {/* // onClick={() => setModalShow(true)} */}
                      {/* > */}
                      Shop Address
                    </div>
                  </Link>
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
};

export default Allshops;

{
  /* 

      {userData.map((user) => (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pb-4">
          <div className="card">
            {/* <a href={`product/${user._id}`}> */
}
{
  /* <a
              onClick={() => {
                setID(user._id);
                console.log(user.shopImage);
                document.getElementById('detail').classList.toggle('hidden'); 
              }}
            >
              <img
                src={`/uploads/${user.shopImage}`}
                className="card-img-top card-img img-thumbnail"
                alt="Card image cap"
              //   onClick={() => {
              //     setID(user._id);
              //   }}
              />
            </a>
            {console.log("id change" + id)};{/* </a> */
}
{
  /* <div className="card-body">
              <h5 className="card-title">{user.sName}</h5>
              <p className="card-text ">{user.sDescription}</p>
              <a href="#" className="btn btn-success btn-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      ))}

        {id && <DetailproductPage id={id} />}
      </div>  */
}
