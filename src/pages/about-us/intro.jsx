import React from 'react'

const Intro = props => <div className="intro about-us-intro">
  <div className="overlay">
    <div className="container">
        <img className="opacitiy-0_5" src="img/momkids 1.png" alt="" />
      <div className="main-content">
        <h1>
          We are <br/>parents.
        </h1>
        <p>
          {props.data ? props.data.paragraph : "Loading"}
        </p>
      </div>
    </div>
  </div>
</div>

export default Intro