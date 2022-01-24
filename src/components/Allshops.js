import React, { useState } from "react";
import DetailproductPage from "../components/DetailproductPage";
import { Link } from "react-router-dom";
import ShopDetail from "../components/ShopDetail";
// import { Link, useLocation, useParams, useHistory } from "react-router-dom";
import "../style/allshops.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Map from "./Map";
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

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Address of 'Shop Name'
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h4>Email</h4>
      <div>
        {/* <Map ></Map> */}
      </div>
        

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
              
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



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
      <div class="container homecon">
        <div class="row">
          {shopData?.map((shop) => (
            <div class="col-md-auto col-xs-12 col-sm-6 col-md-4 col-lg-3 pb-4">
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
                    alt="Card image cap"
                  //   onClick={() => {
                  //     setID(user._id);
                  //   }}
                  />
                </Link>
                {/* </a> */}
                {console.log("id change" + id)}
                <div class="card-body">
                  {/* <div class="grid-container">
                    <div class="item1"><h6 class="card-title nopadding">{shop.sName}</h6></div>
                    <div class="item2 .bg-success.bg-gradient"><p class="card-text bg-success">category {shop.category}</p></div>
                    <div class="item3">Email</div>
                    <div class="item4">Rating</div>
                    <div class="item5">Button</div>
                  </div> */}
                  <h6 class="card-title nopadding">{shop.sName}</h6>
                  <div class="clearfix mb-3">
                    <span class="float-start badge rounded-pill bg-success bg-gradient text-dark">
                      Category {shop.category}
                    </span>

                    <span class="float-end">
                      <a
                        href="#"
                        class="small text-muted text-uppercase aff-link"
                      >
                        rating
                      </a>
                    </span>
                  </div>
                  <p class="card-text">{shop.email}</p>
                  <Link
                    // to={`/map/${shop._id}`}
                    to={`/`}
                    
                    // to={{
                    //   pathname: "{`/map/${shop._id}`}",
                    //   state: { modal: true },
                    // }}
                    class="btn btn-success btn-sm"
                    onClick={() => setModalShow(true)}
                  >
                    Shop Address
                  </Link>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div class="col col-lg-2 detail" id="hideme">
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
  /* <div class="card-body">
              <h5 class="card-title">{user.sName}</h5>
              <p class="card-text ">{user.sDescription}</p>
              <a href="#" class="btn btn-success btn-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      ))}

        {id && <DetailproductPage id={id} />}
      </div>  */
}
