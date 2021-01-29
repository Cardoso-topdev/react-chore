import React from 'react'

const Intro = props => <div className="intro about-us-intro">
  <div className="overlay">
    <div className="container">
      <div className="content-wrapper">
        <div className="img-container">
          <img className="opacitiy-0_5" src="img/momkids 1.png" alt="" width={540} />
        </div>
        <div className="main-content">
          <h1>
            {props.data ? props.data.title : "Loading"}
            <span></span>
          </h1>
          <p>
            {props.data ? props.data.paragraph : "Loading"}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

export default Intro