import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Creators as SymbolsActions } from '../../store/ducks/symbols'

import { Container } from '../../pages/main/styles'
import { HeaderBox } from './styles'
import Autocomplete from '../Autocomplete'
import Marquee from '../Marquee'

class Header extends Component {
  render () {
    return (
      <HeaderBox>
        {this.props.symbols.symbolsEligible ? <Autocomplete /> : null}
        <Container>
          {this.props.symbols.symbolsMarquee.data ? <Marquee /> : null}
        </Container>
      </HeaderBox>
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
)(Header)
