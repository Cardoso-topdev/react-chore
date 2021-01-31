import React from 'react'
import Footer from '../../components/footer'
import Navigation from '../../components/navigation'
import SectionTitle from '../../components/section-title'
import { AGREE_DATA } from "../../data/app-data"
import "./style.scss"

const Agreement = () => <React.Fragment>
    <Navigation isColorWhite={false} />
    <div className="container agreement">
      <SectionTitle extraCls="main-title" header="Terms of Service, Card and ACH Authorization" />
      <p className="normal-desc">{AGREE_DATA}</p>
    </div>
    <Footer />
  </React.Fragment>

export default Agreement
