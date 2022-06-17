import { React, useEffect, useState } from "react";
import product from "../images/product.png";
import { useParams } from "react-router-dom";
import avatar from "../images/avatar.png";
import ReviewCard from "./ReviewCard";
import "../style/productDetail.css";
import { Rating } from "@material-ui/lab";

function ProductDetail() {
  const { prodId } = useParams();
  console.log("Product Id in Product Detail: " + prodId);
  //   const history = useHistory();
  //   const [modalShow, setModalShow] = useState(false);
  const [prodName, setprodName] = useState("");
  const [prodDescription, setprodDescription] = useState("");
  const [prodPrice, setprodPrice] = useState("");
  const [prodImage, setprodImage] = useState(avatar);
  const [prodBrand, setprodBrand] = useState("");
  const [prodStock, setprodStock] = useState("");
  const [prodRating, setProdRating] = useState(0);
  const [prodReviews, setProdReviews] = useState();
  const [numOfReviews, setNumOfReviews] = useState(0);

  const getShopDetail = async () => {
    try {
      const res = await fetch(`/product/prodinfo?id=${prodId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log("Product");
      setprodName(data[0].pName);
      setprodDescription(data[0].pDescription);
      setprodPrice(data[0].price);
      setprodImage(data[0].prodImage);
      setprodBrand(data[0].brand);
      setprodStock(data[0].stock);
      setProdReviews(data[0].reviews);
      setProdRating(data[0].ratings);
      setNumOfReviews(data[0].numOfReviews);
      //   setshopImage(data[0].shopImage);
    } catch (err) {
      //   history.push("/login");
      console.log("Error in Product Detail Page");
    }
  };

  const options = {
    size: "large",
    value: prodRating,
    readOnly: true,
    precision: 0.5,
  };

  useEffect(() => {
    // console.log("sellerid " + localStorage.getItem("id"));
    getShopDetail();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row rowProduct h-25 ">
          <div class="card">
            <div class="row no-gutters h-25">
              <div class="col-md-4">
                <img
                  src={prodImage}
                  class="card-img prodImg"
                  alt="Product Image"
                />
              </div>
              <div class="col-md-8 h-25">
                <div class="card-body">
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <h3 class="card-title">{prodName}</h3>
                  <p class="card-text">{prodDescription}</p>
                  {/* <div>
                                    <p>Reviews</p> */}

                  {/* <div class="rate">

                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1 star</label>
                                </div> */}
                  {/* <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span> */}
                  <div>
                    <Rating {...options} />
                    <span className="rating_span">
                      {" "}
                      ({numOfReviews} Reviews)
                    </span>
                  </div>

                  {/* </div> */}
                  <div class="mb-3">
                    <span class="float-end">
                      <a
                        href="#"
                        class="small text-muted text-uppercase aff-link"
                      >
                        Reviews{" "}
                      </a>
                    </span>
                  </div>
                  <br />
                  <p class="card-text float-left">
                    <small class="text-muted">{prodBrand}</small>
                  </p>
                  <p class="card-text float-right">
                    <small class="text-muted">{prodStock}</small>
                  </p>
                  <div class="options d-flex flex-fill">
                    <select
                      class="form-select w-25"
                      aria-label="Default select example"
                    >
                      <option>Size </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div class="buy d-flex justify-content-between align-items-center">
                    <div class="price text-success">
                      <h3 class="mt-4">Rs. {prodPrice}</h3>
                    </div>
                    <a href="#" class="btn btn-danger mt-3">
                      <i class="fas fa-shopping-cart"></i> Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="reviewsHeading">REVIEWS</h3>
      {prodReviews && prodReviews[0] ? (
        <div className="reviews">
          {prodReviews &&
            prodReviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
        </div>
      ) : (
        <p className="noReviews">No Reviews Yet</p>
      )}
    </>
  );
}

export default ProductDetail;
