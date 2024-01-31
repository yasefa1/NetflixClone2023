import React from 'react'
import Header from '../../Components/header/Header'
import Footer from '../../Components/footer/Footer'
import Banner from '../../Components/Banner/Banner'
import Rowlist from '../../Components/Rows/RowList/RowList'

function Home() {
  return (
    <>
        <Header/>
        <Banner/>
        <Rowlist/>
        <Footer/>
    </>
  )
}

export default Home