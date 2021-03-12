import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const cart = props.summary
    console.log(cart)
    return (
        <div className="details">
            <h4 className="summary">Order summary</h4>
            <p className="items">Item Ordered : {cart.length}</p>
            <p>{props.details}</p>
        </div>
    );
};

export default Cart;