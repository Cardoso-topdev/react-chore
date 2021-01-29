import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => <div>
  <div id="footer">
    <div className="row mt-100">
      <div className="col-xs-12 col-md-6 col-md-offset-2">
        <img src="img/logo.png" alt="" />
        <p className="copyright">© 2019 Chore, a Marc Barnes Corp. | Patent Pending </p>
      </div>
      <div className="col-xs-12 col-md-2 col-md-offset-1 link-btns">
        <Link to="./privacy" className="list">Chore Privacy</Link>
        <Link to='./agreement' className="list">Terms and Conditions</Link>
        <Link to='./fee' className="list">Fees</Link>
      </div>
    </div>
  </div>
</div>

export default Footer