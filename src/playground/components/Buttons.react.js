import React from 'react'
import {Heading, Button, Space} from 'rebass'

export default () => (
  <div>
    <Heading level={2}>Buttons </Heading>
    <Button theme="primary"> Primary </Button>
    <Space x={1} />
    <Button theme="secondary"> Button 2 </Button>
    <Space x={1} />
    <Button theme="error"> Error </Button>
  </div>
)
