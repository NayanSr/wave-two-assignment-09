import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='container'>
            <h2>All products <small>{products.length}</small> are here</h2>
            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Products;