import { call, put } from 'redux-saga/effects'
import moment from 'moment'

import api from '../../services/api'

import { Creators as SymbolsActions } from '../ducks/symbols'

export function* getSymbol (action) {
  try {
    // Call API iextrading
    const { data } = yield call(
      api.get,
      `stock/${
        action.payload.symbolSearch
      }/batch?types=quote,company,chart&range=1d`
    )

    // Get all 'label' symbol equals 0
    let symbolsChartTime = []
    data.chart.map(chart => {
      if (moment(chart.minute, 'HH:mm').minutes() === 0) {
        symbolsChartTime.push(chart.label)
      }

      // reduce uniques symbols 'label' to put in XAxis graphics
      return [...new Set(symbolsChartTime.map(time => time))]
    })

    // Get all 'close' symbol different null
    let symbolsChartClose = data.chart.filter(
      (value, index, self) =>
        data.chart[self.indexOf(value)].close === data.chart[index].close &&
        data.chart[index].close &&
        data.chart[index].close !== null
    )

    console.log(symbolsChartClose)

    // get unique symbols "close" to put in YAxis graphics
    symbolsChartClose = [
      ...new Set(symbolsChartClose.map(chart => chart.close.toFixed(2)))
    ].sort()

    // Data used in the graph
    let chartsData = ''
    const chart = data.chart.map(chart => {
      if (chart.label && chart.high && chart.low && chart.open && chart.close) {
        chartsData = {
          label: chart.label,
          high: chart.high.toFixed(2),
          low: chart.low.toFixed(2),
          open: chart.open.toFixed(2),
          close: chart.close.toFixed(2)
        }
      }

      return chartsData
    })

    // Generates object with all symbol data
    const symbol = {
      quote: {
        latestPrice: data.quote.latestPrice,
        change: data.quote.change.toFixed(2),
        changePercent: data.quote.changePercent, // Caucular porcentagem com duas casas
        latestTime: data.quote.latestTime, // Formatar
        open: data.quote.open.toFixed(2),
        close: data.quote.close.toFixed(2),
        high: data.quote.high.toFixed(2),
        low: data.quote.low.toFixed(2),
        peRatio: data.quote.peRatio.toFixed(2),
        symbolsChartClose,
        symbolsChartTime
      },
      company: {
        symbol: data.company.symbol,
        companyName: data.company.companyName,
        exchange: data.company.exchange,
        website: data.company.website
      },
      chart
    }

    // call reducer addSymbol
    yield put(SymbolsActions.addSymbol(symbol))
  } catch (error) {
    console.error(error)
  }
}
