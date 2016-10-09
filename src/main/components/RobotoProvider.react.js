import React from 'react'
import '../roboto/roboto.css'

const RobotoProvider = ({children}, {rebass}) => {
  const {fontFamily} = rebass

  return (
    <div style={{fontFamily}}>
      {children}
    </div>
  )
}

RobotoProvider.propTypes = {
  children: React.PropTypes.node,
}

RobotoProvider.contextTypes = {
  rebass: React.PropTypes.object,
}


export default RobotoProvider
