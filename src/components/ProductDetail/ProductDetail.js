import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {key}=useParams();
    const product = fakeData.find(pd=>pd.key === key);
    console.log(product)
    return (
        <div>
            <h1>{key}product coming sooooon</h1>
            <Product showAddToCart={false} productAll={product}></Product>
        </div>
    );
};

export default ProductDetail;<h1>product coming sooooon</h1>