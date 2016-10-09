import React from 'react'
import {Heading, Menu, NavItem} from 'rebass'

export default () => (
  <div>
    <Heading level={2}> Menu </Heading>
    <Menu rounded style={{width: '200px'}}>
      <NavItem is="a">
        Menu
      </NavItem>
      <NavItem is="a">
        NavItem
      </NavItem>
      <NavItem is="a">
        NavItem
      </NavItem>
    </Menu>
  </div>
)
