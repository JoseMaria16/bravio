import React from 'react'
import Inicio from './components/home/Inicio'
import Featured from './components/home/Featured'
import BestSellers from './components/home/BestSellers'
import Footer from './components/home/Footer'

function Home() {
  return (
    <>
    <Inicio />
    <Featured />
    <BestSellers /> 
    <Footer />
    </>
  )
}

export default Home