import React from 'react';
import Header from '../../Header';
import Homedecoration from './Homedecoration';
import Furniture from './Furniture';
import Lighting from './Lighting';
import Footer from '../../Footer';

export default function Furnishing() {
  return (
    <>
        <Header></Header>
        <Homedecoration></Homedecoration>
        <Furniture></Furniture>
        <Lighting></Lighting>
        <Footer></Footer>
    </>
  )
}
