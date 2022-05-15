import React from 'react';
import Layout from '../components/layout/Layout';
import PopularProduct from '../components/popular/PopularProduct';

export default function HomePage() {
    return (
        <>
            <Layout
                childComponent={<PopularProduct />}
                displayBanner={true}
            />
        </>
    )
}
