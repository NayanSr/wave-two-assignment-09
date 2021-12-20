import React, { useEffect, useState } from 'react';
import "./Home.css"
import img from "../../images/home-banner.jpg"
import HomeProducts from './HomeProducts';
import Footer from '../Footer/Footer';
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./homeProducts.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div style={{ backgroundColor: 'gray' }}>
            <div style={{ marginTop: "10px", height: "150px" }}>
                <img style={{ height: "200%" }} src={img} alt="" />
            </div>
            <div >
                <h1 style={{ marginTop: '200px', color: 'brown' }}>Our Latest Model:</h1>
                <div className='product-image'>

                    {products.map(product => <HomeProducts
                        key={product.id}
                        product={product}></HomeProducts>)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;