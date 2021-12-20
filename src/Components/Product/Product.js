import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, id, model, image, speed } = props.product;

    // const detail=()=>{

    // };
    return (
        <div className='product-container'>
            <div className='product-data'>
                <div>
                    <h4>{name}</h4>
                    <h6>Model: {model}</h6>
                    <h6>Speed: {speed}</h6>
                </div>
                <div>
                    <img className='image' src={image} alt="" />
                </div>
            </div>
            <button >More</button>;
        </div>
    );
};

export default Product;