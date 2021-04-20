import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    const { img, name, seller, price, stock, key } = props.productAll
    return (
        <div className="product">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3><Link to={"/product/" + key}>{name}</Link></h3>
                <br />
                <p>By : {seller}</p>
                <p> $ {price}</p>
                <p>only {stock} left in stock - order soon</p>
                {props.showAddToCart === true && <button onClick={() =>
                    props.handleButoon(props.productAll)}
                    className="main-button">
                    <FontAwesomeIcon icon={faShoppingCart} />Add to Cart
                </button>}



            </div>


        </div>
    );
};

export default Product;