import React, {PropTypes} from 'react'
import createMaterialTheme from '../theme'
import RobotoProvider from './RobotoProvider.react'
import './MaterialThemeProvider.css'

class MaterialThemeProvider extends React.Component {

  getChildContext() {
    return {
      rebass: createMaterialTheme(this.props.customTheme)
    }
  }

  render() {
    return (
      <div className="MaterialThemeProvider">
        <RobotoProvider>
          {this.props.children}
        </RobotoProvider>
      </div>
    )
  }
}

MaterialThemeProvider.propTypes = {
  children: PropTypes.node,
  customTheme: PropTypes.object,
}

MaterialThemeProvider.childContextTypes = {
  rebass: PropTypes.object,
}

export default MaterialThemeProvider
