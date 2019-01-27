import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Creators as SymbolsActions } from '../../store/ducks/symbols'

import { ListBox } from './styles'
import Simple from './simple'

class Wishlist extends Component {
  render () {
    return (
      <ListBox>
        {this.props.wishlist.map((symbol, idx) => (
          <div
            key={idx}
            className="wishlist"
            data-symbol={symbol.company.symbol}
            onClick={e => this.props.getSymbol(e.currentTarget.dataset.symbol)}
          >
            <Simple
              key={symbol.company.symbol}
              symbol={symbol.company.symbol}
              companyName={symbol.company.companyName}
              latestPrice={symbol.quote.latestPrice}
              change={symbol.quote.change}
              changePercent={symbol.quote.changePercent}
            />
          </div>
        ))}
      </ListBox>
    )
  }
}

const mapStateToProps = state => ({
  symbols: state.symbols
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(SymbolsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wishlist)
