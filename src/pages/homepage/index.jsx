import React from 'react'
import Navigation from '../../components/navigation';
import Intro from './intro';
import Introduce from './introduce';
import About from './about';
import Services from './services';
import JsonData from '../../data/data.json';
import Gallery from './gallery'
import "./style.scss"
import Footer from '../../components/footer';
import IntroChore from './intro-chore'

const HomePage = () => <div className="homepage">
  <Navigation isColorWhite={false} />
  <Intro data={JsonData.Header} />
  <IntroChore />
  <Introduce />
  <About />
  <Services />
  <Gallery />
  <Footer />
</div>

export default HomePage
