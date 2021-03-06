import React from 'react'
import SectionTitle from '../../components/section-title'
import "./style.scss"
import { ACC_DATA } from "../../data/app-data"
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'

const Privacy = () => <React.Fragment >
  <Navigation isColorWhite={false} />
  <div className="privacy">
    <div className="container">
      <SectionTitle header="Privacy Statement for Credit Academy" />
      {ACC_DATA.map((item, idx) => (
        <div className="accordion-item primary-border" key={idx}>
          <dt className="accordion-item__title sub-title" data-toggle="collapse" data-target={"#item" + idx} aria-expanded="false" aria-controls="faq1">
            {item.title}
          </dt>
          <dd className="collapse accordion-item__content" id={"item" + idx} data-parent="#faq_accordion">
            <p className="content normal-desc">{item.content}</p>
          </dd>
        </div>
      ))}
    </div>
  </div>
  <Footer />
</React.Fragment>

export default Privacy
