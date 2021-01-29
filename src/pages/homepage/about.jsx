import React from 'react'

const About = () => <div id="about" className="container">
    <div className="row">
      <div className="col-xs-12 col-md-6 onboard">
        <div className="circle" style={{ marginLeft: 117 }}></div>
        <div className="hLine"></div>
      </div>
      <div className="col-xs-12 col-md-2 onboard text-center">
        <div className="circle" style={{ marginLeft: '37%' }}></div>
      </div>
      <div className="col-xs-12 col-md-3 col-md-offset-2 onboard">
        <div className="line"></div>
        <div className="about-text" style={{ marginTop: 180 }}>
          <h2>Freedom to spend</h2>
          <p>Give them the freedom to make online purchases using a Chore card</p>
        </div>
      </div>
      <div className="col-xs-12 col-md-5 col-md-offset-1">
        <img src="img/credit_card2.png" className="img-responsive" alt="" />
      </div>
    </div>
  </div>

export default About