import { React, useEffect, useState } from "react";
import product from "../images/product.png";
import { useParams } from "react-router-dom";
import avatar from "../images/avatar.png";
import ReviewCard from "./ReviewCard";
import "../style/productDetail.css";
import { Rating } from "@material-ui/lab";
// import "../style/proddetailincdecbtn.css";

import { clearErrors, newReview } from "../actions/productAction";
import { useAlert } from "react-alert";
import { addItemsToCart } from "../actions/cartAction";
import { useSelector, useDispatch } from "react-redux";
import { NEW_REVIEW_RESET } from "../constants/productConstants";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";

function ProductDetail() {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

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

  const [quantity, setQuantity] = useState(3);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

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

  const increaseQuantity = () => {
    if (quantity >= prodStock) return;
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(prodId, quantity));
    alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", prodId);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  const options = {
    size: "large",
    value: prodRating,
    readOnly: true,
    precision: 0.5,
  };

  useEffect(() => {
    // console.log("sellerid " + localStorage.getItem("id"));
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    getShopDetail();
  }, [reviewError, success]);

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
                        href="#reviews_card"
                        class="small text-muted text-uppercase aff-link"
                      >
                        Reviews
                      </a>
                    </span>
                  </div>
                  <br />
                  <p class="card-text float-left">
                    <b>Brand: </b>
                    <small class="text-muted">{prodBrand}</small>
                  </p>
                  <p class="card-text float-right">
                    <b>Stock: </b>
                    <small class="text-muted">{prodStock}</small>
                  </p>
                  {/* <div>
                    <input type="button" onClick={decreaseQuantity} value="-" />
                    <input readOnly type="number" value={quantity} />
                    <input type="button" onClick={increaseQuantity} value="+" />
                  </div> */}
                  <ul class="list-group list-group-vertical">
                    <li class="list-group-item border-0 p-0 ">
                      <input
                        type="button"
                        value="-"
                        className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                        data-field="quantity"
                        onClick={decreaseQuantity}
                      />
                      <div className="order-quantity">
                        <input
                          type="number"
                          name="quantity"
                          value={quantity}
                          className="quantity-field border-0 text-center w-25 text-align-center"
                          readOnly
                        />
                      </div>
                      <input
                        type="button"
                        value="+"
                        className="button-plus border rounded-circle icon-shape icon-sm lh-0"
                        data-field="quantity"
                        onClick={increaseQuantity}
                      />
                    </li>
                  </ul>
                  {/* <div class="options d-flex flex-fill">
                    <select
                      class="form-select w-25"
                      aria-label="Default select example"
                    >
                      <option>Size </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div> */}

                  <div class="buy d-flex justify-content-between align-items-center">
                    <div class="price text-success">
                      <h3 class="mt-4">Rs. {prodPrice}</h3>
                    </div>
                    <Button
                      disabled={prodStock < 1 ? true : false}
                      onClick={addToCartHandler}
                    >
                      <a href="#" class="btn btn-danger mt-3">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                      </a>
                    </Button>
                  </div>
                  <Button onClick={submitReviewToggle} className="submitReview">
                    Submit Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="reviewsHeading">REVIEWS</h3>

      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={submitReviewToggle}
      >
        <DialogTitle>Submit Review</DialogTitle>
        <DialogContent className="submitDialog">
          <Rating
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            size="large"
          />

          <textarea
            className="submitDialogTextArea"
            cols="30"
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitReviewToggle} color="secondary">
            Cancel
          </Button>
          <Button onClick={reviewSubmitHandler} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {prodReviews && prodReviews[0] ? (
        <div id="reviews_card" className="reviews">
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
