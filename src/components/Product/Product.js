import React from 'react';
import "./Product.css"
const Product = (props) => {
    return (
        <div className="product">
            <div>
                <img src={props.image} alt="" />
            </div>
            <div>
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