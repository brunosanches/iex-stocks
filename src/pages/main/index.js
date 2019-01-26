import React, { Fragment, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Container } from './styles'
import { Creators as SymbolsAction } from '../../store/ducks/symbols'

import Header from '../../components/Header'
import Wishlist from '../../components/Symbol/wishlist'
import SymbolDetail from '../../components/Symbol/detail'

class Main extends Component {
  componentDidMount () {
    this.props.getSymbolsSupport()
    this.props.getSymbolsMarquee()
  }

  render () {
    const { symbols } = this.props

    return (
      <Fragment>
        <Header />
        <Container>
          <Wishlist symbol={symbols.wishlist} />
          {Array.from(symbols.wishlist).length > 0 ? (
            <Wishlist symbol={symbols.wishlist} />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(SymbolsAction, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
