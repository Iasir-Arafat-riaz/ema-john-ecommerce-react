import React, { useState } from 'react';
import fake from "../../fakeData"
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    console.log(fake)
    const firstTen = fake.slice(0, 10)
    const [product, setProduct] = useState(firstTen)
    return (
        <div className="shop-Container">
            <div className="product-container">
            
                {product.map(pro => <Product products={pro.name}> </Product>)}
            
            

            </div>
            <div className="cart-container">
                <h1>order</h1>
            </div>
            
            
        </div>
    );
};

export default Shop;