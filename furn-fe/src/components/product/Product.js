import React from 'react';
import './Product.scss';

export default function Product({ src, name, description, cost }) {
    return (
        <div className='ProductDetail'>
            <img className='product-img' src={src} alt="product_image" />
            <div className='product-name'>{name}</div>
            <div className='product-description'>{description}</div>
            <div className='product-cost'>{`$${cost}`}</div>
        </div>
    )
}