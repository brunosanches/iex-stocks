import React, { Component } from 'react'
import { TimelineMax, TweenLite, Linear } from 'gsap/TweenMax'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { MarqueeBox, MarqueeChild } from './styles'
import { Creators as SymbolsActions } from '../../store/ducks/symbols'
import Simple from '../Symbol/simple'

const SLIDE_TO_SHOW = 8
const WIDTH = 180
const tl = new TimelineMax({
  repeat: -1
})

class Marquee extends Component {
  componentDidMount () {
    const symbolsMarquee = this.props.symbols.symbolsMarquee
    const { content } = this.refs

    tl.add(
      TweenLite.to(
        content,
        `${symbolsMarquee.length + symbolsMarquee.length / 2}`,
        {
          transform: `translate3d(${symbolsMarquee.length *
            WIDTH *
            -1}px, 0, 0)`,
          ease: Linear.easeNone
        }
      )
    )

    tl.add(
      TweenLite.to(content, 0, {
        transform: `translate3d(0, 0, 0)`
      })
    )
  }

  render () {
    const { symbolsMarquee } = this.props.symbols
    return (
      <MarqueeBox>
        <MarqueeChild
          style={{
            width: `${(symbolsMarquee.length + SLIDE_TO_SHOW) * WIDTH}px`
          }}
          ref="content"
          onMouseEnter={() => {
            tl.pause()
          }}
          onMouseLeave={() => {
            tl.play()
          }}
        >
          {symbolsMarquee.map((symbol, idx) => (
            <div
              key={idx}
              className="marquee-child__box"
              data-symbol={symbol.company.symbol}
              onClick={e =>
                this.props.getSymbol(e.currentTarget.dataset.symbol)
              }
            >
              <Simple
                key={symbol.company.symbol}
                symbol={symbol.company.symbol}
                latestPrice={symbol.quote.latestPrice}
                change={symbol.quote.change}
                changePercent={symbol.quote.changePercent}
              />
            </div>
          ))}
          {symbolsMarquee.map((symbol, idx) => {
            if (idx + 1 <= SLIDE_TO_SHOW) {
              return (
                <div
                  key={idx}
                  className="marquee-child__box"
                  data-symbol={symbol.company.symbol}
                  onClick={e =>
                    this.props.getSymbol(e.currentTarget.dataset.symbol)
                  }
                >
                  <Simple
                    key={symbol.symbol}
                    symbol={symbol.symbol}
                    latestPrice={symbol.quote.latestPrice}
                    change={symbol.quote.change}
                    changePercent={symbol.quote.changePercent}
                  />
                </div>
              )
            }
            return null
          })}
        </MarqueeChild>
      </MarqueeBox>
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
)(Marquee)
