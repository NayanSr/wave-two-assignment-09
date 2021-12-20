import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import UpcommingProduct from '../UpcommingProduct/UpcommingProduct';

const UpcommingProducts = () => {
    const [upcommingProducts, setUpcommingProducts] = useState([]);
    useEffect(() => {
        fetch('./upcomming.JSON')
            .then(res => res.json())
            .then(data => setUpcommingProducts(data))
    }, []);
    return (
        <div>
            <h2>Our Upcomming Products Are:</h2>
            {
                upcommingProducts.map(product => <UpcommingProduct
                    key={product.id}
                    product={product}>

                </UpcommingProduct>)
            }
            <Footer />
        </div>
    );
};

export default UpcommingProducts;