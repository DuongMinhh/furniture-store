import React from 'react';
import './SaleInfo.scss';
import '../../../scss/GlobalStyle.scss';

const data = {
    salePercent: 'SALE UPTO 70%',
    header: 'FURNITURE AT COST',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus accumsan enim. Integer scelerisque eleifend dignissim. Ut sagittis suscipit porta. Morbi molestie mi et mattis vehicula'
}
export default function SaleInfo() {
    return (
        <div className='SaleInfo'>
            <div className='sale-percen'>
                {data.salePercent}
            </div>
            <h1>
                {data.header}
            </h1>
            <div className='description'>
                {data.description}
            </div>
            <a className='global-info-btn'>
                Discover More
            </a>
        </div>
    )
}
