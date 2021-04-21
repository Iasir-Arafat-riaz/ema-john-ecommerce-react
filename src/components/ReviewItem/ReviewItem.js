import React from 'react';

const ReviewItem = (props) => {
    // console.log(props.product.category)
  const{name, quantity}=props.product;
    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default ReviewItem;