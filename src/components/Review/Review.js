import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([])

    const handlePlaceOrder =()=>{
        setCart([])
        processOrder()

        console.log("do programming")
    }

    const removeProduct = (producKey) => {
        console.log("try harder", producKey)
        const newCart = cart.filter(crd => crd.key !== producKey)
        setCart(newCart);
        removeFromDatabaseCart(producKey)

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
        <div className="shop-Container">
            <div className="product-container">

                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cartSummary={cart}>
                    <button  onClick={handlePlaceOrder} className="main-button">Place Order</button>
                </Cart>

                <br/>
                <br/>
                <Link to="shop">
                <button style={{color: 'red'}, {backgroundColor:"skyBlue"}}> Back to Home</button>
                </Link>

            </div>
            
        </div>
    );
};

export default Review;