import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'

import { Container } from './styles'

import Header from '../../components/Header'
import SymbolList from '../../components/Symbol/list'
import SymbolDetail from '../../components/Symbol/detail'

class Main extends Component {
  render () {
    const { symbols } = this.props
    return (
      <Fragment>
        <Header />
        <Container>
          {Array.from(symbols.wishlist).length > 0 ? (
            <SymbolList symbol={symbols.wishlist} />
          ) : null}

          {Object.keys(symbols.symbol).length > 0 ? (
            <SymbolDetail symbol={symbols.symbol} />
          ) : null}
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  symbols: state.symbols
})

export default connect(mapStateToProps)(Main)
