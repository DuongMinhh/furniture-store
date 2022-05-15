import React from 'react';
import Layout from '../components/layout/Layout';
import ProductView from '../components/product-view/ProductView';

export default function ProductPage() {
    return (
        <>
            <Layout
                childComponent={<ProductView />}
                displayBanner={false}
            />
        </>
    )
}
