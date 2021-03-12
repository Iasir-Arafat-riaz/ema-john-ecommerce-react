import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const cart = props.summary
    console.log(cart)
    return (
        <div>
            <h4>Order summary</h4>
            <p>Item Ordered : {cart.length}</p>
        </div>
    );
};

export default Cart;