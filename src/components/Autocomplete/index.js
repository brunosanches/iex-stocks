import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Creators as SymbolsActions } from '../../store/ducks/symbols'
import { AutocompleteBox, Form } from './style'

class Autocomplete extends Component {
  state = {
    // The active selection's index
    activeSuggestion: 0,
    // The suggestions that match the user's input
    filteredSuggestions: [],
    // Whether or not the suggestion list is shown
    showSuggestions: false,
    // What the user has entered
    symbolInput: ''
  }

  static propTypes = {
    getSymbol: PropTypes.func,
    symbols: PropTypes.shape({
      symbol: PropTypes.shape({
        chart: PropTypes.shape({
          data: PropTypes.arrayOf(
            PropTypes.shape({
              average: PropTypes.number,
              changeOverTime: PropTypes.number,
              close: PropTypes.number,
              date: PropTypes.date,
              high: PropTypes.number,
              label: PropTypes.string,
              low: PropTypes.number,
              marketAverage: PropTypes.number,
              marketChangeOverTime: PropTypes.number,
              marketClose: PropTypes.number,
              marketHigh: PropTypes.number,
              marketLow: PropTypes.number,
              marketNotional: PropTypes.number,
              marketNumberOfTrades: PropTypes.number,
              marketOpen: PropTypes.number,
              marketVolume: PropTypes.number,
              minute: PropTypes.string,
              notional: PropTypes.number,
              numberOfTrades: PropTypes.number,
              open: PropTypes.number,
              volume: PropTypes.number
            })
          ),
          symbolsChartClose: PropTypes.array,
          symbolsChartTime: PropTypes.array
        }),
        company: PropTypes.shape({
          companyName: PropTypes.string,
          exchange: PropTypes.string,
          symbol: PropTypes.string,
          website: PropTypes.string
        }),
        quote: PropTypes.shape({
          change: PropTypes.string,
          changePercent: PropTypes.string,
          close: PropTypes.string,
          high: PropTypes.string,
          latestPrice: PropTypes.number,
          latestTime: PropTypes.string,
          low: PropTypes.string,
          open: PropTypes.string,
          peRatio: PropTypes.string
        }),
        error: PropTypes.shape({
          message: PropTypes.string,
          orign: PropTypes.string,
          status: PropTypes.bool
        })
      })
    })
  }

  static defaultProps = {
    suggestions: []
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.symbolInput !== '') {
      this.props.getSymbol(this.state.symbolInput)

      this.setState({ symbolInput: '' })
    }
  }

  onChange = e => {
    const { symbolsEligible } = this.props.symbols
    const symbolInput = e.currentTarget.value
    const filteredSuggestions = Array.from(symbolsEligible).filter(
      data => data.symbol.toLowerCase().indexOf(symbolInput.toLowerCase()) > -1
    )

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      symbolInput: e.currentTarget.value
    })
  }

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      symbolInput: e.currentTarget.dataset.symbol
    })
  }

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state

    // User pressed the enter key
    if (e.keyCode === 13) {
      let selectInput =
        filteredSuggestions[activeSuggestion] === undefined
          ? this.state.symbolInput
          : filteredSuggestions[activeSuggestion].symbol

      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        symbolInput: selectInput
      })
    } else if (e.keyCode === 38) {
      // User pressed the up arrow
      if (activeSuggestion === 0) {
        return
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 })
    } else if (e.keyCode === 40) {
      // User pressed the down arrow
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 })
    }
  }

  notify = message => {
    console.log(message)
    toast.error(message)
  }

  render () {
    const {
      onChange,
      onClick,
      onKeyDown,
      notify,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        symbolInput
      }
    } = this

    const { symbols } = this.props

    console.log(`Loading: ${symbols.loading} - Error: ${symbols.error}`)
    if (symbols.error) {
      notify(symbols.error)
    }

    let suggestionsListComponent

    if (showSuggestions && symbolInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = 'suggestion-active'
              }

              return (
                <li
                  data-symbol={suggestion.symbol}
                  className={className}
                  key={suggestion.symbol}
                  onClick={onClick}
                >
                  {suggestion.symbol} ({suggestion.name})
                </li>
              )
            })}
          </ul>
        )
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>Sem sugestões, você está por sua conta!</em>
          </div>
        )
      }
    }

    return (
      <AutocompleteBox>
        <ToastContainer />
        <div className="header__content">
          <Form action="submit" onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={symbolInput}
              placeholder="Search for symbols"
            />
            {suggestionsListComponent}
            <button type="submit">X</button>
          </Form>
          <h1>IEX Stocks</h1>
        </div>
      </AutocompleteBox>
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
)(Autocomplete)
