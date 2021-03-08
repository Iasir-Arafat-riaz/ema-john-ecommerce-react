import React, { useState } from 'react';
import fake from "../../fakeData"
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    
    const firstTen = fake.slice(0, 10)
    const [product, setProduct] = useState(firstTen)
    console.log(product)
    return (
        <div className="shop-Container">
            <div className="product-container">
            
                {product.map(pro => <Product image={pro.img} products={pro.name} seller={pro.seller} price={pro.price} stock={pro.stock}> </Product>)}
            
            

            </div>
            <div className="cart-container">
                <h1>order</h1>
            </div>
            
            
        </div>
    );
};

export default Shop;