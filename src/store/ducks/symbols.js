/*
 * Types
 */
export const Types = {
  ADD_REQUEST: 'symbols/ADD_REQUEST',
  ADD_SUCCESS: 'symbols/ADD_SUCCESS',
  ADD_FAILURE: 'symbols/ADD_FAILURE'
}

/*
 * Reducers
 */
const INITIAL_STATE = {
  data: []
}

export default function symbols (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state }
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data]
      }
    default:
      return state
  }
}

/*
 * Actoins
 */
export const Creators = {
  addRequest: symbol => ({
    type: Types.ADD_REQUEST,
    payload: { symbol }
  }),

  addSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  })
}
