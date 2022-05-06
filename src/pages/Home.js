import React from 'react';
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/banner/Banner';
import PopularProduct from '../components/popular/PopularProduct';

export default function Home() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <PopularProduct/>
    </>
  )
}
