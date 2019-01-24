import { call, put } from 'redux-saga/effects'

import api from '../../services/api'

import { Creators as SymbolsActions } from '../ducks/symbols'

export function* getSymbol (action) {
  try {
    const response = yield call(
      api.get,
      `stock/${action.payload.symbol}/batch?types=quote,company,chart`
    )
  } catch (error) {}
}
