import React from 'react'

const Services = () => <div id="services">
  <div className="container">
    <div className="row" style={{ marginTop: 14 }}>
      <div className="col-xs-12 col-md-6 onboard">
        <div className="circle"></div>
        <div className="hLine"></div>
      </div>
      <div className="col-xs-12 col-md-2 onboard text-center">
        <div className="circle" style={{ marginLeft: '45%' }}></div>
      </div>
      <div className="col-xs-12 col-md-3 text-right">
        <img src="img/icon4.png" alt="" />
      </div>
    </div>
    <div className="row">
      <div className="row position-relative content-wrapper">
        <div className="col-xs-12 col-md-5 col-md-offset-1 mt-100 img-container">
          <img src="img/icon5.png" style={{ marginLeft: 150 }} alt="" />
          <img src="img/credit_card3-bk.png" className="credit_card3-bk img-responsive position-absolute" alt="" />
          <img src="img/credit_card3.png" className="img-responsive mt-100" alt="" />
          <img src="img/icon6.png" className="icon6" alt="" />
        </div>
        <div className="col-md-2 onboard">
          <div className="line" />
          <img src="img/number3.png" alt="" />
        </div>
        <div className="col-xs-12 col-md-4 mt-100">
          <div className="section-title text-left" style={{ marginTop: 250 }}>
            <h2>Pay with <br></br>chores</h2>
            <p>Youth pay back their balance with chores, in order to continue to use the chore card</p>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="intro-image" /> */}
  </div>
</div>

export default Services