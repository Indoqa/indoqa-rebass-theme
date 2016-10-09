import React from 'react'
import {Heading, ButtonCircle, Space} from 'rebass'
import Icon from 'react-geomicons'

export default () => (
  <div>
    <Heading level={2}>Buttons Circle (Floating Action Buttons) </Heading>
    <ButtonCircle size={40}>
      <Icon name="heart" />
    </ButtonCircle>
    <Space x={1} />
    <ButtonCircle size={30}>
      <Icon name="heart" />
    </ButtonCircle>
    <Space x={1} />
    <ButtonCircle size={40} backgroundColor="error">
      <Icon name="heart" />
    </ButtonCircle>
  </div>
)
