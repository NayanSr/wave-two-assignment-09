import React from 'react';
import './HomeProducts.css'
const HomeProduct = (props) => {
    const { name, model, image } = props.product;
    return (
        <div className='aa' >
            <img src={image} alt="" />
            <div class="text-block">
                <h4>{name}</h4>
                <p>{model}</p>
            </div>
        </div>
    );
};

export default HomeProduct;