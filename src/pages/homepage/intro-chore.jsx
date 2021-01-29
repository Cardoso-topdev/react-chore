import React from 'react'
import SectionTitle from '../../components/section-title'

const IntroChore = () => <div className="intro-chore container">
  <SectionTitle header = "Chore" extraCls="intro-chore-title"/>
  <div className="chore-text">
    <h1>
      Introducing the <br />
      new! chore card
      <span></span>
    </h1>
    
  </div>
  <h3 className="intro-extra">153,092 Chores done.</h3>
</div>

export default IntroChore
