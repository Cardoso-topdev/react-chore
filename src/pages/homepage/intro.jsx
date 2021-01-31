import React from 'react'
import SectionTitle from '../../components/section-title'

const Intro = props => <div className="intro">
  <div className="overlay">
    <div className="container">
      <div className="row" style={{ position: 'relative' }}>
        <img src="img/intro.png" alt="" className="intro-image" width={540} />
        <div className="col-md-6 intro-text">
          <h1>Chores done.<br />No-fuss</h1>
          <p>
            {props.data ? props.data.paragraph : "Loading"}
          </p>
          <div className="form-item">
            <input className="btn" type="submit" value="Try use chore" />
          </div>
        </div>
        {/* <h3 className="intro-extra">{props.data.extra}</h3> */}
      </div>
    </div>
  </div>
</div>

export default Intro