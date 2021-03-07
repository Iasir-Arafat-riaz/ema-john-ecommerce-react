import React, { useState } from 'react';
import fake from "../../fakeData"

const Shop = () => {
    console.log(fake)
    const firstTen = fake.slice(0, 10)
    const [product, setProduct] = useState(firstTen)
    return (
        <div>

            <h2>{product.length}</h2>
            <ul>
                {product.map(pro => <li>{pro.name}</li>)}
            </ul>

        </div>
    );
};

export default Shop;