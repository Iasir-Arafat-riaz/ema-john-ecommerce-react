import React from 'react';

const ReviewItem = (props) => {
    // console.log(props.product.category)
    const { name, quantity,img } = props.product;
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
            <img src={img} alt=""/>
            <p>Quantity : {quantity}</p>
            <br />
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;