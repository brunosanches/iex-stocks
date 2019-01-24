import React from 'react'

import { Container } from '../../pages/main/styles'
import { HeaderBox, Form } from './styles'

const Header = () => (
  <HeaderBox>
    <div className="header__content">
      <Form action="submit">
        <input type="search" name="search" placeholder="Search for symbols" />
        <button type="button">X</button>
      </Form>
      <h1>IEX Stocks</h1>
    </div>

    <div className="header__symbols">
      <Container>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </Container>
    </div>
  </HeaderBox>
)

export default Header
