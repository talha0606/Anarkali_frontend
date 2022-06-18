import React, { Fragment } from "react";
import avatar from "../../images/avatar.png";
import { Link, useHistory } from "react-router-dom";
import "./cart.css";
import image from "../../images/avatar.png";

import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";

// function incrementValue(e) {
//         e.preventDefault();
//         var fieldName = $(e.target).data('field');
//         var parent = $(e.target).closest('div');
//         var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

//         if (!isNaN(currentVal)) {
//             parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
//         } else {
//             parent.find('input[name=' + fieldName + ']').val(0);
//         }
//     }

//     function decrementValue(e) {
//         e.preventDefault();
//         var fieldName = $(e.target).data('field');
//         var parent = $(e.target).closest('div');
//         var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

//         if (!isNaN(currentVal) && currentVal > 0) {
//             parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
//         } else {
//             parent.find('input[name=' + fieldName + ']').val(0);
//         }
//     }

//     $('.input-group').on('click', '.button-plus', function(e) {
//         incrementValue(e);
//     });

//     $('.input-group').on('click', '.button-minus', function(e) {
//         decrementValue(e);
//     });

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  //Delete Item from Cart
  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  //login or shipping link
  const checkoutHandler = () => {
    history.push("/logiinsignup?redirect=shipping");
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="container cart-container">
            <h3>Shopping Cart</h3>
            <span>
              Not ready to checkout?
              <a href="/"> Continue Shopping</a>
            </span>
            <div className="row cart-row">
              <div className="col cart-list">
                <ul class="list-group">
                  {cartItems?.map((item) => (
                    <li class="list-group-item cart-list-group-item">
                      <div class="card">
                        <div class="row cartRow">
                          <div class="col-md-3 cartImageDiv">
                            <img
                              // src={`/uploads/${prod.prodImage}`}
                              src={item.image}
                              // {prod.prodImage}
                              className="cart-image"
                              alt="product"
                            />
                          </div>
                          <div class="col-md-9 cartDetailDiv">
                            <div class="row">
                              <div class="col-7">
                                <h4 className="cName">{item.name}</h4>
                                <p className="cartCost">
                                  <b>Rs. </b>
                                  {item.price}/-
                                </p>
                                {/* <p className="cartCost">
                            Size: <b>L</b>
                          </p> */}
                              </div>
                              <div class="col-5">
                                <ul class="list-group list-group-vertical">
                                  <li class="list-group-item border-0">
                                    <b>Quantity:</b>
                                  </li>
                                  <li class="list-group-item border-0">
                                    <input
                                      type="button"
                                      value="-"
                                      class="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                                      data-field="quantity"
                                      onClick={() =>
                                        decreaseQuantity(
                                          item.product,
                                          item.quantity,
                                          item.stock
                                        )
                                      }
                                    />
                                    <input
                                      type="number"
                                      name="quantity"
                                      value={item.quantity}
                                      class="quantity-field border-0 text-center w-25"
                                      readOnly
                                    />
                                    <input
                                      type="button"
                                      value="+"
                                      class="button-plus border rounded-circle icon-shape icon-sm lh-0"
                                      data-field="quantity"
                                      onClick={() =>
                                        increaseQuantity(
                                          item.product,
                                          item.quantity,
                                          item.stock
                                        )
                                      }
                                    />
                                  </li>
                                  <li class="list-group-item border-0">
                                    <button
                                      className="btn btn-sm btn-danger m-1"
                                      onClick={() =>
                                        deleteCartItems(item.product)
                                      }
                                    >
                                      Remove
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/*Order Summary*/}

              <div className="col order-summary text-center">
                <h4>Order Summary</h4>
                <hr />
                <ul class="list-group list-group-vertical-md ">
                  <li class="list-group-item border-0">
                    <div class="row">
                      <div class="col-sm-8 text-left">Gross total:</div>
                      <div class="col-sm-4 text-right">{`Rs. ${cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )}/-`}</div>
                    </div>
                    {/* <div class="row">
                                    <div class="col-sm-8 text-left"></div>
                                    <div class="col-sm-4 text-right">Rs. 1500</div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8 text-left"></div>
                                    <div class="col-sm-4 text-right">Rs. 1500</div>
                                </div> */}
                  </li>
                  {/* <li class="list-group-item border-0">
                    <div class="row">
                      <div class="col-sm-8 text-left">Shipping:</div>
                      <div class="col-sm-4 text-right">Rs. 150</div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        Shipping options will be updated during checkout.
                      </div>
                    </div>
                  </li> */}
                  <hr />
                  <li class="list-group-item border-0">
                    <div class="row">
                      <div class="col-sm-8 text-left">Total:</div>
                      <div class="col-sm-4 text-right">{`Rs. ${cartItems.reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )}/-`}</div>
                    </div>
                  </li>
                  <li class="list-group-item border-0">
                    <input
                      type="button"
                      value="Continue to Checkout"
                      name="login"
                      onClick={checkoutHandler}
                    />
                  </li>
                  <hr />
                </ul>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      {/* <div className="cart-action">
            <h3>
                Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                :
                $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h3>
            <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
                Proceed to Checkout
            </button>

            </div> */}
    </Fragment>
  );
};

export default Cart;
