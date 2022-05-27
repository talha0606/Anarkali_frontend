import React from "react";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";
import "../style/cart.css";
import image from "../images/avatar.png"


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

    


    return (
        <>
            <div className="container cart-container">
                <h3>Shopping Cart</h3>
                <span>Not ready to checkout?
                    <a href="\"> Continue Shopping</a>
                </span>
                <div className="row cart-row">
                    <div className="col cart-list">
                        <ul class="list-group">
                            {/* {myproducts?.map((prod) => ( */}
                            <li class="list-group-item cart-list-group-item">
                                <div class="card">
                                    <div class="row cartRow">
                                        <div class="col-md-3 cartImageDiv">
                                            <img
                                                // src={`/uploads/${prod.prodImage}`}
                                                src={image}
                                                // {prod.prodImage}
                                                className="cart-image"
                                                alt="product"
                                            />
                                        </div>
                                        <div class="col-md-9 cartDetailDiv">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h4 className="cName">Name</h4>
                                                    <p className="cartCost"><b>Rs. 10000</b></p>
                                                    <p className="cartCost">Size: <b>L</b></p>

                                                </div>
                                                <div class="col-5">
                                                <ul class="list-group list-group-vertical">
                                                <li class="list-group-item border-0">
         <input type="button" value="-" class="button-minus border rounded-circle  icon-shape icon-sm mx-1 " data-field="quantity"/>
         <input type="number" step="1" max="10" value="1" name="quantity" class="quantity-field border-0 text-center w-25"/>
         <input type="button" value="+" class="button-plus border rounded-circle icon-shape icon-sm lh-0" data-field="quantity"/>
                                                </li>
                                                <li class="list-group-item border-0">
                                                    <button
                                                        className="btn btn-sm btn-danger m-1"
                                                    // onClick={() => deleteHandler(prod._id)}
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






                            {/* ))} */}
                        </ul>
                    </div>
                    <div className="col order-summary text-center">
                        <h4>Order Summary</h4>
                    </div>
                </div>
            </div>

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

        </>
    );
};

export default Cart;