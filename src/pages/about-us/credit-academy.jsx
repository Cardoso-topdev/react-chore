import React from 'react'
import SectionTitle from '../../components/section-title'
import UserSection from './user-section'
import {USER_DATA} from "../../data/app-data"

const CreditAcademy = () => <div className="chore-about">
  <img src="img/about-sale-circle-bk.png" className="circle-bk"  alt=""/>
  <div className="chore-bk-container">
    <img src="img/Vector 1.png" className="img-bk vect-1"  alt=""/>
    <img src="img/Vector 2.png" className="img-bk vect-2"  alt=""/>
  </div>
  <div className="container section-container">
    <SectionTitle extraCls="academy-title" header="We are Chore" />
    {/* {USER_DATA.map( (user, idx) => <UserSection user = {user} idx = {idx} key={idx}/> )} */}
    <div className="avatar-wrapper">
      <img src="img/user3.png" className="about-avatar"  alt=""/>
      <img src="img/blue-pattern.png" className="pattern blue-pattern"  alt=""/>
      <img src="img/yellow-pattern.png" className="pattern yellow-pattern"  alt=""/>
    </div>
    <div className="avatar-description">
      <div className="left-section">
        <p>Charles<br/>Co-Founder</p>
        <p>Dad. Entrepreneur. Transformation<br/>Leader. Foodie. Globe Trotter.</p>
      </div>
      <div className="right-section">
        <p>Primavera<br/>Co-Founder</p>
        <p>Homeschool mom.Ex-banker.<br/>INFJ.Padawan.Mixologist.</p>
      </div>
    </div>
    <div className="career-wrapper" >
      <img src="img/ic_career_girl 1.png" className="career-girl"  alt=""/>
    </div>
  </div>
</div>

export default CreditAcademy
