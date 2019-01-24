import React, { Fragment, Component } from 'react'

import { Container } from './styles'

import Header from '../../components/Header'
import SymbolList from '../../components/Symbol/list'
import SymbolDetail from '../../components/Symbol/detail'

class Main extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Container>
          <SymbolList />
          <SymbolDetail />
        </Container>
      </Fragment>
    )
  }
}

export default Main
