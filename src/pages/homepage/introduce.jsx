import React from 'react'
import SectionTitle from '../../components/section-title'

const Introduce = () => <div id="features" className="text-center">
  <div className="intro-image-transparency" />
  <div className="intro-image" />
  <div className = "container" >
    <SectionTitle header = "How it works" content="The effortless way to get kids to do
chores."/>

    <div className="container">
      <div className="row position-relative">
        <div className="col-xs-12 text-left icon1-parent"><img src="img/icon1.png" alt="" /></div>
        <div className="col-xs-12 col-md-6 mt-100 position-relative img-container">
          <img src="img/credit_card1-bk.png" className="credit_card1-bk img-responsive position-absolute" alt="" />
          <img src="img/credit_card1.png" className="img-responsive " alt="" />
        </div>
        <div className="col-md-2 mt-100 onboard">
          <img src="img/number1.png" alt="" />
          <div className="line first-line" />
        </div>
        <div className="col-xs-12 col-md-4 mt-100">
          <div className="section-title text-left">
            <h2 className = "spending-limit">Set a spending limit.</h2>
            <p>Create a Chore card and set a spending limit, giving you the final say on how much your youth can charge to their card</p>
          </div>
          <div className="text-left">
            <img src="img/icon2.png" alt="" />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, right: 50 }}><img src="img/icon3.png" alt="" /></div>
      </div>
    </div>
  </div>
</div>

export default Introduce