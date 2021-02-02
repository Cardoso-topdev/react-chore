import React from 'react'
import SectionTitle from '../../components/section-title'

const Gallery = () => <div id="portfolio">
  <div  className="container">
    <SectionTitle extraCls="text-center mt-100" header="‘‘It's easy, and it's fun!’’" />
    <div className="row">
      <div className="col-sm-12 col-md-10 col-md-offset-1">
        <div className="row download-section position-relative">
          <div className="col-md-4 col-md-offset-1 left-section" style={{ marginTop: 50 }}>
            <h2>Sign up and get <br></br> your kids to do chores!</h2>
            <p>It’s easy, just download the app and get your kids
engaged to do chores, no fuss!</p>
            <div className="form-item">
              <input className="btn" type="submit" value="Try use chore" />
            </div>
          </div>
          <img className="img-fun" src="img/img_fun.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="intro-image" />
</div>

export default Gallery
