import { call, put } from 'redux-saga/effects'

import api from '../../services/api'

import { Creators as SymbolsActions } from '../ducks/symbols'

export function* getSymbol (action) {
  try {
    const { data } = yield call(
      api.get,
      `stock/${action.payload.symbolSearch}/batch?types=quote,company,chart`
    )

    const symbol = {
      quote: data.quote,
      company: data.company,
      chart: data.chart
    }

    yield put(SymbolsActions.addSymbol(symbol))
  } catch (error) {}
}
