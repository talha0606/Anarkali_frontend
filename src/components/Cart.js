import React from "react";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

const Cart = ( ) => {

    return (
        <>
        <div className="container cart">
        <h3>Shopping Cart</h3>
            <div className="cart-list">
               
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

        </div>
        </>
    );
};

export default Cart;