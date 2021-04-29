import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import fake from "../../fakeData"
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {

    const firstTen = fake.slice(0, 10)
    const [product, setProduct] = useState(firstTen)
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)
        const previousCart = productKeys.map(proKey => {
            const product = fakeData.find(pd => pd.key === proKey)
            product.quantity= savedCart[proKey]
            return product

            // console.log(savedCart[proKey])
        })
        setCart(previousCart)
    }, []);

    const handleProduct = (productAll) => {
        // console.log("bujh beta riaz",price)

        // const newCart = [...cart, productAll];
        // setCart(newCart)
        // const sameProduct = newCart.filter(pd => pd.key === productAll.key)
        // const count = sameProduct.length;

        //for added qantity (qantity issue e jonno NaN dekhay, ei problem face na korle uporer motoi kora jabe )
        const toBeAddedKey = productAll.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;



        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct]
        }

        else {
            productAll.quantity = 1;
            newCart = [...cart, productAll]
        }
        setCart(newCart)


        addToDatabaseCart(productAll.key, count)

    }
    console.log(product)

    return (
        <div className="shop-Container" >
            <div className="product-container">

                {product.map(pro => <Product
                    key={pro.key}
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