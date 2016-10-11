import objectAssign from 'object-assign'

const boxShadow = '0 2px 1px -1px gray'
const backgroundTransition = 'background-color 200ms linear'
const boxShadowTransition = 'box-shadow 200ms'

const materialTheme = {
  name: 'Material',
  fontFamily: 'Roboto, sans-serif',
  Button: {
    boxShadow,
    fontWeight: '500',
    textTransform: 'uppercase',
    transition: boxShadowTransition
  },
  ButtonCircle: {
    boxShadow,
    transition: boxShadowTransition
  },
  Menu: {
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12)'
  },
  NavItem: {
    fontWeight: 300,
    transition: backgroundTransition
  },
  Drawer: {
    padding: '0px'
  }
}

export default (customTheme) => objectAssign(materialTheme, customTheme)
