import React, { useState } from 'react';
import fake from "../../fakeData"
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    
    const firstTen = fake.slice(0, 10)
    const [product, setProduct] = useState(firstTen)
    const[cart,setCart]=useState([])
    const handleProduct=(productAll)=>{
        // console.log("bujh beta riaz",price)
        const newCart=[...cart,productAll];
        setCart(newCart)

    }
    console.log(product)
    
    return (
        <div className="shop-Container" >
            <div className="product-container">
            
                {product.map(pro => <Product 
                showAddToCart={true}
                handleButoon={handleProduct} 
                productAll={pro}> </Product>)}
            
            

            </div>
            <div className="cart-container">
                <Cart cartSummary={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;