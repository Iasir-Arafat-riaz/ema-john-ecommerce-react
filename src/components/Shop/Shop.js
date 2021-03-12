import React, { useState } from 'react';
import fake from "../../fakeData"
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    
    const firstTen = fake.slice(0, 10)
    const [product, setProduct] = useState(firstTen)
    const[cart,setCart]=useState([])
    const handleProduct=(prod)=>{
        console.log("bujh beta riaz",prod)
        const newCart=[...cart,prod];
        setCart(newCart)

    }
    console.log(product)
    
    return (
        <div className="shop-Container" >
            <div className="product-container">
            
                {product.map(pro => <Product handleButoon={handleProduct} image={pro.img} products={pro.name} seller={pro.seller} price={pro.price} stock={pro.stock}> </Product>)}
            
            

            </div>
            <div className="cart-container">
                <Cart summary={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;