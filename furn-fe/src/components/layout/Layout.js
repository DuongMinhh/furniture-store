import React from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import Banner from '../banner/Banner';

export default function Layout({ displayBanner=false, childComponent }) {
    return (
        <>
            <NavBar />
            {
                displayBanner ? <Banner /> : ""
            }
            
            {childComponent}
            <Footer />
        </>
    )
}
