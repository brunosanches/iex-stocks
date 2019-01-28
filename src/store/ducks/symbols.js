import { toast } from 'react-toastify'

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
  REMOVE_WISHLIST: 'symbols/REMOVE_WISHLIST',
  ADD_FAILURE: 'symbols/ADD_FAILURE'
}

/*
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  error: null,
  wishlist: JSON.parse(localStorage.getItem('@IEXStocks:wishlist')) || [],
  symbolsEligible: {},
  symbolsMarquee: {},
  symbol: {}
}

export default function symbols (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_SYMBOL:
      return { ...state, error: null, loading: true }

    case Types.ADD_SYMBOL:
      let wishlist = state.wishlist

      // check if symbol in wishlist
      if (
        Array.from(wishlist).filter(
          symbolList =>
            symbolList.company.companyName ===
            action.payload.symbol.company.companyName
        ).length > 0
      ) {
        let index = wishlist.findIndex(
          symbolList =>
            symbolList.company.companyName ===
            action.payload.symbol.company.companyName
        )

        // update wishlist localstorage
        localStorage.setItem('@IEXStocks:wishlist', JSON.stringify(wishlist))

        // Replace the item by index.
        wishlist.splice(index, 1, action.payload.symbol)
      }

      return {
        ...state,
        symbol: action.payload.symbol,
        loading: false,
        error: null,
        wishlist
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
      let wishlistStorage = [...state.wishlist, action.payload.symbol]

      localStorage.setItem(
        '@IEXStocks:wishlist',
        JSON.stringify(wishlistStorage)
      )

      return {
        ...state,
        wishlist: wishlistStorage
      }

    case Types.REMOVE_WISHLIST:
      let removeSymbolWishlist = state.wishlist.filter(
        symbolList =>
          symbolList.company.companyName !==
          action.payload.symbol.company.companyName
      )

      // update wishlist localstorage
      localStorage.setItem(
        '@IEXStocks:wishlist',
        JSON.stringify(removeSymbolWishlist)
      )

      return {
        ...state,
        wishlist: removeSymbolWishlist
      }

    case Types.ADD_FAILURE:
      toast.error(action.payload.error.message)
      return { ...state, loading: false }
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
    type: Types.ADD_WISHLIST,
    payload: { symbol }
  }),

  removeWishList: symbol => ({
    type: Types.REMOVE_WISHLIST,
    payload: { symbol }
  }),

  addFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
}
