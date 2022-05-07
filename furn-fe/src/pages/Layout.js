import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';

export default function Layout({ displayBanner=false, ChildComponent }) {
    return (
        <>
            <NavBar />
            {
                displayBanner ? <Banner /> : ""
            }
            
            <ChildComponent />
            <Footer />
        </>
    )
}
