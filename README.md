# Indoqa Rebass Theme

A rebass theme based on material design. See a list of already styled components in our [demo app](https://indoqa.github.io/indoqa-rebass-theme/)

## Design

The theme is designed to add a basic material look and feel. It intents to be extended by a custom application theme. So the cascading order can be
```
"Rebass base styles" < "Material Theme" < "Custom Applicaton Theme" < "Per component styling"
```

## Usage

### Higher order component

For convenience we provide a higher order component that
  * sets app the rebass child context
  * merges a custom application theme into the material theme
  * adds a root `<div>` that sets font-family to 'Roboto'
  * adds a css file that includes the Roboto font files downloaded from Google Fonts

```javascript
import React from 'react'
import MaterialProvider from 'indoqa-rebass-theme'
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

```  

### Low level 

If you only want to reuse the rebass configuration file merged with a custom application styles, you can create the config object with 
```javascript
import createMaterialTheme from 'indoqa-rebass-theme'
import customTheme from './my-custom-theme.js'

const rebassConfig = createMaterialTheme(customTheme)
....
getChildContext() {
 return {
  rebass: rebassConfig
 }
}
```
