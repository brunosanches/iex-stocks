import { call, put } from 'redux-saga/effects'
import moment from 'moment'

import api from '../../services/api'

import { Creators as SymbolsActions } from '../ducks/symbols'

export function* getSymbolsSupport (action) {
  try {
    let symbols = yield JSON.parse(
      localStorage.getItem('@IEXStocks:symbolsEligible')
    ) || []

    if (symbols.length === 0) {
      // Call API iextrading
      const { data } = yield call(api.get, `ref-data/symbols`)

      symbols = {
        date: moment().format('MMDDYYYY'),
        data: data.filter(symbol => symbol.isEnabled)
      }
    } else {
      if (symbols.date !== moment().format('MMDDYYYY')) {
        // Call API iextrading
        const { data } = yield call(api.get, `ref-data/symbols`)

        symbols = {
          date: moment().format('MMDDYYYY'),
          data: data.filter(symbol => symbol.isEnabled)
        }
      }
    }

    localStorage.setItem('@IEXStocks:symbolsEligible', JSON.stringify(symbols))
    yield put(SymbolsActions.addSymbolsSupport(symbols))
  } catch (error) {
    console.error(error)
  }
}

export function* getSymbol (action) {
  try {
    let symbol = {}
    let chart = false
    let isError = {
      orign: '',
      status: false,
      message: ''
    }

    // Call API iextrading
    const { data } = yield call(
      api.get,
      `stock/${
        action.payload.symbolSearch
      }/batch?types=quote,company,news,chart&range=1d`
    )

    console.log(chart)

    // Continue only if latestPrice exists
    if (!data.quote.latestPrice) {
      isError = {
        orign: 'quote',
        status: true,
        message: `Não há informações suficientes no symbol (${
          action.payload.symbolSearch
        }), por isso não será possível exibi-lo`
      }
    } else {
      // Get all 'label' symbol equals 0 to put in XAxis graphics
      let symbolsChartTime = []
      data.chart.map(chart => {
        if (
          chart.label &&
          chart.minute &&
          moment(chart.minute, 'HH:mm').minutes() === 0
        ) {
          symbolsChartTime.push(chart.label)
        }

        // reduce uniques symbols
        return [...new Set(symbolsChartTime.map(time => time))]
      })

      // Get all "close" symbol different null to put in YAxis graphics
      let symbolsChartClose = data.chart.filter(
        (value, index, self) =>
          data.chart[self.indexOf(value)].close === data.chart[index].close &&
          data.chart[index].close &&
          data.chart[index].close !== null
      )

      // get unique symbols "close" to put in YAxis graphics
      symbolsChartClose = [
        ...new Set(symbolsChartClose.map(chart => chart.close.toFixed(2)))
      ].sort()

      console.log(chart)

      // Generates "chart" object only if symbolsChartTime or symbolsChartClose exists
      if (symbolsChartTime.length === 0 || symbolsChartClose.length === 0) {
        isError = {
          orign: 'chart',
          status: true,
          message: `Não há informações suficientes no symbol (${
            action.payload.symbolSearch
          }) para exibir um gráfico`
        }
      } else {
        // data used in the graph
        chart = data.chart.filter(chart => {
          return (
            chart.label &&
            chart.label !== '' &&
            (chart.high && chart.high !== '') &&
            (chart.low && chart.low !== '') &&
            (chart.open && chart.open !== '') &&
            (chart.close && chart.close !== '')
          )
        })
      }

      // Generates "quote" object to be used in the symbol
      symbol = {
        ...symbol,
        quote: {
          latestPrice: data.quote.latestPrice,
          change: data.quote.change && data.quote.change.toFixed(2),
          changePercent:
            data.quote.changePercent &&
            (data.quote.changePercent * 100).toFixed(2),
          latestTime: data.quote.latestTime, // Formatar
          open: data.quote.open && data.quote.open.toFixed(2),
          close: data.quote.close && data.quote.close.toFixed(2),
          high: data.quote.high && data.quote.high.toFixed(2),
          low: data.quote.low && data.quote.low.toFixed(2),
          peRatio: data.quote.peRatio && data.quote.peRatio.toFixed(2)
        }
      }

      // Generates "company" object to be used in the symbol
      symbol = {
        ...symbol,
        company: {
          symbol: data.company.symbol,
          companyName: data.company.companyName,
          exchange: data.company.exchange,
          website: data.company.website
        }
      }

      // Generates "chart" object to be used in the symbol
      symbol = {
        ...symbol,
        chart: {
          data: chart,
          symbolsChartTime,
          symbolsChartClose
        }
      }

      // Generates "news" object to be used in the symbol
      symbol = { ...symbol, news: data.news }

      // Generates "error" object to be validate
      symbol = { ...symbol, error: isError }

      // call reducer addSymbol
      yield put(SymbolsActions.addSymbol(symbol))
    }

    // Get all 'label' symbol equals 0
    /* let symbolsChartTime = []
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
      news: data.news,
      chart
    }

    // call reducer addSymbol
    yield put(SymbolsActions.addSymbol(symbol)) */
  } catch (error) {
    console.error(error)
  }
}

export function* getSymbolsMarquee (action) {
  try {
    // Call API iextrading
    const { data } = yield call(
      api.get,
      `stock/market/collection/list?collectionName=infocus&range=1`
    )

    let symbols = []
    data.map(symbol => {
      symbols.push({
        quote: {
          latestPrice: symbol.latestPrice,
          change: symbol.change && symbol.change.toFixed(2),
          changePercent:
            symbol.changePercent && (symbol.changePercent * 100).toFixed(2)
        },
        company: {
          symbol: symbol.symbol,
          companyName: symbol.companyName,
          exchange: symbol.primaryExchange
        }
      })

      return symbols
    })

    yield put(SymbolsActions.addSymbolsMarquee(symbols))
  } catch (error) {
    console.error(error)
  }
}

/* symbols.push({
  quote: {
    latestPrice: symbol.latestPrice,
    change: symbol.change && symbol.change.toFixed(2),
    changePercent:
      symbol.changePercent && (symbol.changePercent * 100).toFixed(2)
  },
  company: {
    symbol: symbol.symbol,
    companyName: symbol.companyName,
    exchange: symbol.primaryExchange
  }
} */
