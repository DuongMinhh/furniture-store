import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

export default function Product({ id, src, name, description, cost }) {
    return (
        <div className='Product'>
            <Link
                to={`/chi-tiet-san-pham/${id}`}
            >
                <img className='product-img' src={src} alt="product_image" />
            </Link>
            <Link
                to={`/chi-tiet-san-pham/${id}`}
                className='product-name'
            >
                {name}
            </Link>

            <div className='product-description'>{description}</div>
            <div className='product-cost'>{`$${cost}`}</div>
        </div>
    )
}