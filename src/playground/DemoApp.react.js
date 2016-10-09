import React from 'react'
import MaterialProvider from '../main'
import DemoPage from './DemoPage.react'

const customTheme = {
  Heading: {
    marginBottom: '10px',
    marginTop: '30px'
  }
}

const DemoApp = () => (
  <MaterialProvider customTheme={customTheme}>
    <DemoPage />
  </MaterialProvider>
)

export default DemoApp
