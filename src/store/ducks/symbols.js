/*
 * Types
 */
export const Types = {
  REQUEST: 'symbols/REQUEST',
  ADD_SYMBOL: 'symbols/ADD_SYMBOL',
  ADD_WISHLIST: 'symbols/ADD_WISHLIST',
  ADD_FAILURE: 'symbols/ADD_FAILURE'
}

/*
 * Reducers
 */
const INITIAL_STATE = {
  wishlist: [],
  symbol: {}
}

export default function symbols (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state }
    case Types.ADD_SYMBOL:
      return {
        ...state,
        symbol: action.payload.symbol
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
  request: symbolSearch => ({
    type: Types.REQUEST,
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
