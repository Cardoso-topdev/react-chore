import React from 'react'

const Intro = props => <div className="intro">
  <div className="overlay">
    <div className="container">
      <div className="row intro-wrapper">
        <img src="img/intro-hero.png" alt="" className="intro-hero"/>
        <img src="img/intro-hero-bk.png" alt="" className="intro-hero-bk" />
        <div className="col-md-6 intro-text">
          <h1>Chores done.<br />No-fuss</h1>
          <p>
            {props.data ? props.data.paragraph : "Loading"}
          </p>
        </div>
        {/* <h3 className="intro-extra">{props.data.extra}</h3> */}
      </div>
    </div>
  </div>
</div>

export default Intro