import React from 'react'
import SectionTitle from '../../components/section-title'
import {CHORE_DATA} from '../../data/app-data'

const ChoreSaleSection = () => <div className="sale-section">
 <div className="bk-container">
    <img className="img-icon icon7" src="img/icon7.png"/>
    <img className="img-icon icon8" src="img/icon8.png"/>
    <img className="img-icon icon9" src="img/icon9.png"/>
    <img className="img-icon icon10" src="img/icon10.png"/>
    <img className="img-icon icon11" src="img/icon11.png"/>
    <img className="img-icon note-bk" src="img/note-bk.png"/>
  </div>
  <div className = "container">
    <div className="left-side">
      <div className="sale-left-content">
        {CHORE_DATA.map( (chore_item, idx) => <SectionTitle header={chore_item.header} content={chore_item.content} key={idx}/>)}
      </div>
    </div>

    <div className="right-side">
      <img className="img-icon note-check opacitiy-0_5" src="img/note-check.png"/>
    </div>
  </div>
</div>

export default ChoreSaleSection
