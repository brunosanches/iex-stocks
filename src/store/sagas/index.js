import { all, takeLatest } from 'redux-saga/effects'

import { Types as SymbolsTypes } from '../ducks/symbols'
import { getSymbolsSupport, getSymbolsMarquee, getSymbol } from './symbols'

export default function* rootSaga () {
  yield all([takeLatest(SymbolsTypes.GET_SYMBOLS_SUPPORT, getSymbolsSupport)])
  yield all([takeLatest(SymbolsTypes.GET_SYMBOLS_MARQUEE, getSymbolsMarquee)])
  yield all([takeLatest(SymbolsTypes.GET_SYMBOL, getSymbol)])
}
