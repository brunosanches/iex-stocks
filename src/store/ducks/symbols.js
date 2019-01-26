/*
 * Types
 */
export const Types = {
  GET_SYMBOLS_SUPPORT: 'symbols/GET_SYMBOLS_SUPPORT',
  ADD_SYMBOLS_SUPPORT: 'symbols/ADD_SYMBOLS_SUPPORT',
  GET_SYMBOLS_MARQUEE: 'symbols/GET_SYMBOLS_MARQUEE',
  ADD_SYMBOLS_MARQUEE: 'symbols/ADD_SYMBOLS_MARQUEE',
  GET_SYMBOL: 'symbols/GET_SYMBOL',
  ADD_SYMBOL: 'symbols/ADD_SYMBOL',
  ADD_WISHLIST: 'symbols/ADD_WISHLIST',
  ADD_FAILURE: 'symbols/ADD_FAILURE'
}

/*
 * Reducers
 */
const INITIAL_STATE = {
  wishlist: [],
  symbolsEligible: {},
  symbolsMarquee: {},
  symbol: {}
}

export default function symbols (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SYMBOL:
      return { ...state }
    case Types.ADD_SYMBOL:
      return {
        ...state,
        symbol: action.payload.symbol
      }
    case Types.GET_SYMBOLS_SUPPORT:
      return { ...state }
    case Types.ADD_SYMBOLS_SUPPORT:
      return {
        ...state,
        symbolsEligible: action.payload.symbols.data
      }
    case Types.GET_SYMBOLS_MARQUEE:
      return { ...state }
    case Types.ADD_SYMBOLS_MARQUEE:
      return {
        ...state,
        symbolsMarquee: action.payload.symbols
      }
    case Types.ADD_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload.symbol]
      }
    default:
      return state
  }
}

/*
 * Actoins
 */
export const Creators = {
  getSymbolsSupport: () => ({
    type: Types.GET_SYMBOLS_SUPPORT
  }),

  addSymbolsSupport: symbols => ({
    type: Types.ADD_SYMBOLS_SUPPORT,
    payload: { symbols }
  }),

  getSymbolsMarquee: () => ({
    type: Types.GET_SYMBOLS_MARQUEE
  }),

  addSymbolsMarquee: symbols => ({
    type: Types.ADD_SYMBOLS_MARQUEE,
    payload: { symbols }
  }),

  getSymbol: symbolSearch => ({
    type: Types.GET_SYMBOL,
    payload: { symbolSearch }
  }),

  addSymbol: symbol => ({
    type: Types.ADD_SYMBOL,
    payload: { symbol }
  }),

  addWishList: symbol => ({
    type: Types.ADD_SYMBOL,
    payload: { symbol }
  })
}
