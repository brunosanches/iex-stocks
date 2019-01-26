import React, { Component } from 'react'
import { TimelineMax, TweenLite, Linear } from 'gsap/TweenMax'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { MarqueeBox, MarqueeChild } from './styles'
import { Creators as SymbolsActions } from '../../store/ducks/symbols'

const SLIDE_TO_SHOW = 8
const WIDTH = 180
const tl = new TimelineMax({
  repeat: -1
})

class Marquee extends Component {
  componentDidMount () {
    const symbolsMarquee = this.props.symbols.symbolsMarquee.data
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
            width: `${(symbolsMarquee.data.length + SLIDE_TO_SHOW) * WIDTH}px`
          }}
          ref="content"
          onMouseEnter={() => {
            tl.pause()
          }}
          onMouseLeave={() => {
            tl.play()
          }}
        >
          {symbolsMarquee.data.map((item, index) => {
            return (
              <img
                src={`http://via.placeholder.com/180x55?text=${item.symbol}`}
                key={index + 1}
              />
            )
          })}
          {symbolsMarquee.data.map((item, index) => {
            if (index + 1 <= SLIDE_TO_SHOW) {
              return (
                <img
                  src={`http://via.placeholder.com/180x55?text=${item.symbol}`}
                  key={`last-${index + 1}`}
                />
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
