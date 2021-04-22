import React from 'react';
import Cart from '../Cart/Cart';

const ReviewItem = (props) => {
    // console.log(props.product.category)
    const { name, quantity, img, key,price } = props.product;
    const reviewItemStyle = {
        borderBottom: "1px solid lightGray",
        marginBottom: "6px",
        paddingBottom: "10px",
        marginLeft: "200px",
        marginTop: "20px"
    }
    return (


        <div style={reviewItemStyle}>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <p>Quantity : {quantity}</p>
            <p> <small> price: ${price}</small>  </p>
            <br />
            <button
                className="main-button"
                onClick={() => props.removeProduct(key)}
            >Remove</button>



        </div>
    );
};

export default ReviewItem;