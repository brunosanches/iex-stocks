import { all, takeLatest } from 'redux-saga/effects'

import { Types as SymbolsTypes } from '../ducks/symbols'
import { getSymbol } from './symbols'

export default function* rootSaga () {
  yield all([takeLatest(SymbolsTypes.REQUEST, getSymbol)])
}
