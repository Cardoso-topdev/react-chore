import React from 'react'
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import "./style.scss"
import { FAQ_DATA } from "../../data/app-data"

const ContactUS = () => <div>
  <Navigation isColorWhite={false} />
  <div className="contact-us container">
    <div className="contact-left col-xs-12 col-md-6">
      <h2 className="title">
        Contact us
      </h2>
      <p>Always feel free to keep in touch!</p>
      <form className="contact-form" action="">
        <div className="form-item">
          <input type="text" name="name" placeholder="Full name" />
        </div>
        <div className="form-item">
          <input type="text" name="email" placeholder="email"/>
        </div>
        <div className="form-item">
          <textarea name="content" placeholder="Your message" />
        </div>
        <div className="form-item">
          <input className="btn" type="submit" value="Send message" />
        </div>
      </form>
    </div>
    <div className="contact-right col-xs-12 col-md-6">
      <img src="img/Group 26.png" alt="" className="contact-img" />
    </div>
  </div>
  <div className="faq-container container" id="faq">
    <div className="intro-image-transparency" />
    <div className="intro-image" />
    <div className="main-container">
      <h2 className="title">
        Frequenlty Asked Questions
      </h2>
      {FAQ_DATA.map((item, idx) => (
        <div className="accordion-item" key={idx}>
          <dt className="accordion-item__title sub-title" data-toggle="collapse" data-target={"#item" + idx} aria-expanded="false" aria-controls="faq1">
            {item.title}
          </dt>
          <dd className="collapse accordion-item__content" id={"item" + idx} data-parent="#faq_accordion">
            <p className="content normal-desc">{item.content}</p>
          </dd>
        </div>
      ))}
      <div className="career-wrapper" >
        <img src="img/ic_career_girl 1.png" className="career-girl"  alt=""/>
      </div>
    </div>
  </div>
  <Footer />
</div>

export default ContactUS
