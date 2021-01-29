import React from 'react'

const SectionTitle = (props) => <div className={"section-title " + props.extraCls} style={props.style}>
  <h2>{props.header}</h2>
  <p>{props.content}</p>
</div>

export default SectionTitle
