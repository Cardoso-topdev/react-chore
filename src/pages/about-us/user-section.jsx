import React from 'react'

const UserSection = props => <div className={(props.idx % 2 == 0) ? "user-section " : "user-section  flex-reverse"}>
  <div className="user-img-wrapper">
    {(props.idx % 2 == 0) ? 
        <img src="img/blue-pattern.png" className="pattern-bottom" /> 
      : <img src="img/yellow-pattern.png" className="pattern-top" /> }
    <img src={props.user.userImg} className="user-avatar" />
  </div>
  <div className="user-info">
    <div className="user-info-wrapper img-responsive" >
      <h3 className="user-name">{props.user.userName}</h3>
      <p className="user-description">{props.user.userDesc}</p>
      <div className="social-icons">
        <img src="img/twitter 1.png" className="social-icon"/>
        <img src="img/linkedin 1.png" className="social-icon"/>
      </div>
    </div>
  </div>
  <div className="row-gap">
  </div>
</div>

export default UserSection
