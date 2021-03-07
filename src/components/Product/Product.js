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
            </div>


        </div>
    );
};

export default Product;