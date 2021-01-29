import React from 'react'
import SectionTitle from '../../components/section-title'

const Intro = props => <div className="intro">
  <div className="overlay">
    <div className="container">
      <div className="row" style={{ position: 'relative' }}>
        <SectionTitle header = "Chore" extraCls="intro-chore-title"/>
        <img src="img/intro.png" alt="" className="intro-image" width={540} />
        <div className="col-md-6 intro-text">
          <h1>
            {props.data ? props.data.title : "Loading"}
            <span></span>
          </h1>
          <p>
            {props.data ? props.data.paragraph : "Loading"}
          </p>
        </div>
        <h3 className="intro-extra">{props.data.extra}</h3>
      </div>
    </div>
  </div>
</div>

export default Intro