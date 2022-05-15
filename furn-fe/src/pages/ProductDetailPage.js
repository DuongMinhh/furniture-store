import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout/Layout';
import ProductDetail from '../components/product-detail/ProductDetail';

export default function ProductDetailPage() {

    let param = useParams();

    return (
        <>
            <Layout
                childComponent={<ProductDetail productId={param.productId} />}
                displayBanner={false}
            />
        </>
    )
}
