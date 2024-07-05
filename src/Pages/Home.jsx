import React from 'react'
import MainImage from '../Components/MainImage'
import CustomerService from '../Components/CustomerService'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'
import Service from '../Components/Service'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <MainImage/>
      <CustomerService/>
      <Service/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
