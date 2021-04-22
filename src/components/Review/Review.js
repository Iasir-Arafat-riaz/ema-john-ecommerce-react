import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([])

    const removeProduct=(producKey)=>{
        console.log("try harder", producKey)
        const newCart = cart.filter(crd=> crd.key !== producKey)
        setCart(newCart);

    }

    useEffect(() => {
        //cart
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)

        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key]
            return product
        });
        setCart(cartProduct)

        console.log(cartProduct);
    }, [])
    return (
        <div>
            <h1>Cart Items : {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;