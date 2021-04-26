import React from 'react';
import { Link } from 'react-router-dom';
// import Product from '../Product/Product';
import "./Cart.css"
const Cart = (props) => {
    const cart = props.cartSummary
    console.log(cart)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let produc = cart[i];
        total = total + produc.price * produc.quantity
        // debugger;

    }
    let shippingCost = 11.9
    if (total < 100) {
        shippingCost = 0
    }
    else if (total < 120) {
        shippingCost = 15
    }
    else if (total < 150) {
        shippingCost = 20
    }
    else if (total > 500) {
        shippingCost = 51
    }
    
    let taxes = total * .1
    let inTotal = total + shippingCost + taxes;
    const fixedAll=(fix)=>{
        let fixed=fix.toFixed(2)
        return Number(fixed)
    }
    return (
        <div className="details bg-info">
            <h4 className="summary">Order summary</h4>
            <p className="items">Item Ordered : {cart.length}</p>
            <p>Items :  ${fixedAll(total)}</p>
            <p>Shipping : ${fixedAll(shippingCost)}</p>
            <p><small>tax: ${fixedAll(taxes)}</small></p>
            <p>order total:${fixedAll(inTotal)}</p>
            <br/>
            <Link to="review">
            <button className="main-button">Review Order</button>
            </Link>

        </div>
    );
};

export default Cart;