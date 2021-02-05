import React from 'react'

const Navigation = props => <nav id="menu" className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1">
        {" "}
        <span className="sr-only">Toggle navigation</span>{" "}
        <span className="icon-bar"></span>{" "}
        <span className="icon-bar"></span>{" "}
        <span className="icon-bar"></span>{" "}
      </button>
      <a className="navbar-brand page-scroll" href="/#page-top">
        <img
          src={props.isColorWhite ? "img/logo-white.png" : "img/logo.png"}
          className="img-responsive"
          alt="Logo"
          width={140} />
      </a>{" "}
    </div>

    <div className="collapse navbar-collapse"
      id="bs-example-navbar-collapse-1" >
      <ul className="nav navbar-nav">
        <li>
          <a href="/#features" className={props.isColorWhite ? "page-scroll color-white" : "page-scroll"}>How it works</a>
        </li>
        <li>
          <a href="/contactus#faq" className={props.isColorWhite ? "page-scroll color-white" : "page-scroll"}>FAQ</a>
        </li>
        <li>
          <a href="/contactus" className={props.isColorWhite ? "page-scroll color-white" : "page-scroll"}>Contact us</a>
        </li>
        <li>
          <a href="/aboutus" className={props.isColorWhite ? "page-scroll color-white" : "page-scroll"}>About us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

export default Navigation
