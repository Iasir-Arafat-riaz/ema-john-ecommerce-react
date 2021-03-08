import React from 'react';
import "./Product.css"
const Product = (props) => {
    return (
        <div className="product">
            <div className="image">
                <img src={props.image} alt="" />
            </div>
            <div className="product-info">
                <h3>{props.products}</h3>
                <br />
                <p>By : {props.seller}</p>
                <p>${props.price}</p>
                <p>only {props.stock} left in stock - order soon</p>
            </div>


        </div>
    );
};

export default Product;