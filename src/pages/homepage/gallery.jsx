import React from 'react'
import SectionTitle from '../../components/section-title'

const Gallery = () => <div id="portfolio" className="container">
  <SectionTitle extraCls="text-center mt-100" header="‘‘It's easy, and it's fun!’’" />
  <div className="row">
    <div className="col-sm-12 col-md-10 col-md-offset-1">
      <div className="row download-section position-relative">
        <div className="col-md-4 col-md-offset-1" style={{ marginTop: 50 }}>
          <h2>Sign up and get <br></br> free credit!</h2>
          <p>It’s easy, it’s just a few clicks away for a free credit</p>
          <img src="img/appstore.png" alt="" />
        </div>
        <img className="img-fun" src="img/img_fun.png" alt="" />
      </div>
    </div>
  </div>
  <div className="intro-image" />
</div>

export default Gallery
