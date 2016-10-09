import React from 'react'
import {Heading, Button, NavItem, Dropdown, Arrow, DropdownMenu} from 'rebass'

export default class DropdownExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdown: false
    }
  }

  render() {
    return (
      <div>
        <Heading level={2}> Dropdown </Heading>
        <Dropdown>
          <Button onClick={() => {this.setState({dropdown: !this.state.dropdown})}}>
            Dropdown
            <Arrow direction="down" />
          </Button>
          <DropdownMenu open={this.state.dropdown} onDismiss={() => {this.setState({dropdown: !this.state.dropdown})}}>
            <NavItem is="a">
              Hello
            </NavItem>
            <NavItem is="a">
              Hi
            </NavItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}
