import React from 'react'
import SectionTitle from '../../components/section-title'

const Gallery = () => <div id="portfolio">
  <div  className="container">
    <SectionTitle extraCls="text-center mt-100" header="‘‘It's easy, it's fun and it's FREE!’’" />
    <div className="row">
      <div className="col-sm-12 col-md-10 col-md-offset-1">
        <div className="row download-section position-relative">
          <div className="col-md-4 col-md-offset-1 left-section">
            <h2>Sign up and get <br></br> your kids to do chores! FREE</h2>
            <p>Download the app and get your kids
engaged to do chores, no fuss!</p>
            <img src="img/appstore.png" alt="" />
          </div>
          <img className="img-fun" src="img/img_fun.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="intro-image" />
</div>

export default Gallery