import React, { useState } from "react";
import DetailproductPage from "../components/DetailproductPage";
import { Link } from "react-router-dom";
import ShopDetail from "../components/ShopDetail";

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
  return (
    <>
      <div class="container homecon">
        <div class="row">
          {shopData.map((shop) => (
            <div class="col-md-auto col-xs-12 col-sm-6 col-md-4 col-lg-3 pb-4">
              <div className="card">
                <a
                  onClick={() => {
                    setID(shop._id);
                    console.log(shop.shopImage);
                  }}
                >
                  <img
                    src={`/uploads/${shop.shopImage}`}
                    className="card-img-top card-img img-thumbnail"
                    alt="Card image cap"
                    //   onClick={() => {
                    //     setID(user._id);
                    //   }}
                  />
                </a>
                {console.log("id change" + id)}
                <div class="card-body">
                  <h6 class="card-title nopadding">{shop.sName}</h6>
                  <p class="card-text ">
                    {shop.sDescription /*.slice(0, 60)*/}...
                  </p>
                  <Link to="./ShopDetail"  class="btn btn-success btn-sm" 
                  onClick={() => {
                    setID(shop._id);}}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div class="col col-lg-2 detail" id="hideme">
          {id && <DetailproductPage id={id} setID={setID} />}
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
