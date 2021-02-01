import React from 'react'

export const useCustomEffect = (callback, deps, bIsMount = false) => {
  const hasMount = React.useRef(false)

  React.useEffect( () => {
    if ( hasMount.current) {
      if ( !bIsMount)
        callback()
    } else {
      hasMount.current = true
      if ( bIsMount)
        callback()
    }
  }, deps)
}
