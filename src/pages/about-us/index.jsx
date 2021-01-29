import React from 'react'
import Navigation from '../../components/navigation'
import Intro from './intro'
import JsonData from '../../data/data.json';
import "./style.scss"
import ChoreSaleSection from './chore-sale-sction';
import CreditAcademy from './credit-academy';
import Footer from '../../components/footer';

const AboutUS = () => <div className='about-us'>
  <Navigation isColorWhite={true} />
  <Intro data={JsonData.AboutUs} />
  <ChoreSaleSection />
  <CreditAcademy />
  <Footer /> 
</div>

export default AboutUS
