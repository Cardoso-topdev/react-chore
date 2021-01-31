import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const ScrollToTop = props => {
  const prevPropsRef = React.useRef(props);

  React.useEffect( () => {
    if ( (props.location.pathname != "/") && (props.location !== prevPropsRef.current.location)) window.scrollTo(0, 0)
    prevPropsRef.current = props;
  })

  return props.children
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(ScrollToTop)