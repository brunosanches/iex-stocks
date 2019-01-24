import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Creators as SymbolsActions } from '../../store/ducks/symbols'

import { Container } from '../../pages/main/styles'
import { HeaderBox, Form } from './styles'

class Header extends Component {
  state = {
    symbolInput: ''
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.symbolInput !== '') {
      this.props.request(this.state.symbolInput)

      this.setState({ symbolInput: '' })
    }
  }

  render () {
    return (
      <HeaderBox>
        <div className="header__content">
          <Form action="submit" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="search"
              value={this.state.symbolInput}
              placeholder="Search for symbols"
              onChange={e => this.setState({ symbolInput: e.target.value })}
            />
            <button type="submit">X</button>
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
