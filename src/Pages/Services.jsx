import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ServiceFirst from '../Components/ServiceFirst'
import ServiceList from '../Components/ServiceList'
import ServiceRelation from '../Components/ServiceRelation'
import ServiceFamily from '../Components/ServiceFamily'

const Services = () => {
  return (
    <div>
        <Header/>
        <ServiceFirst/>
        <ServiceRelation/>

        <ServiceList/>
        <ServiceFamily/>
            <Footer/>

    </div>
  )
}

export default Services
