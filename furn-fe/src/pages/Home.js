import React from 'react';
import PopularProduct from '../components/popular/PopularProduct';
import Layout from './Layout';

export default function Home() {
    return (
        <>
            <Layout
                ChildComponent={PopularProduct}
                displayBanner={true}
            />
        </>
    )
}
