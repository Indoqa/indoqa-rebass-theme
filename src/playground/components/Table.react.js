import React from 'react'
import {Heading, Table} from 'rebass'

const data = [
  ['Hamburger', 'Beef', 'Onion', 'Bun'],
  ['Pizza', 'Pork', 'Tomato', 'Crust'],
  ['Corndog', 'Pork', 'Corn', 'Cornbread'],
  ['Hot Dog', 'Pork', 'Peppers', 'Bun']
]

export default () => (
  <div>
    <Heading level={2}>Table </Heading>
    <Table
      data={data}
      headings={['Name', 'Meat', 'Vegetable', 'Carb']}
    />
  </div>
)
