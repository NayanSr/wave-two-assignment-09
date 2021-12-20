import React from 'react';
import './UpcommingProduct.css'

const UpcommingProduct = (props) => {
    const { name, image, description, model } = props.product;
    return (
        <div className='upcomming-product'>
            <div>
                <h5>{name}</h5>
                <small> <strong> Model: {model}</strong></small>
                <p>{description}</p>
            </div>
            <div>
                <img className='image' src={image} alt="" />
            </div>
        </div>
    );
};

export default UpcommingProduct;