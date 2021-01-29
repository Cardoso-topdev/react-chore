import React from 'react'
import SectionTitle from '../../components/section-title'
import UserSection from './user-section'
import {USER_DATA} from "../../data/app-data"

const CreditAcademy = () => <div className="credit-academy">
  <div className="credit-bk-container">
    <img src="img/Vector 1.png" className="vect-1" />
    <img src="img/Vector 2.png" className="vect-2" />
  </div>
  <div className="container">
    <SectionTitle extraCls="academy-title" header="We are Credit Academy" />
    {USER_DATA.map( (user, idx) => <UserSection user = {user} idx = {idx} key={idx}/> )}
    <div className="career-wrapper" >
      <img src="img/ic_career_girl 1.png" className="career-girl" />
    </div>
  </div>
</div>

export default CreditAcademy
