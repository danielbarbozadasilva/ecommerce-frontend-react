import { getCart } from '~/util/cart'
import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: getCart() || null,
  sessionId: '',
  senderHash: ''
}

const reducer = ({ ...state } = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.PAYMENT_LOADING:
      state.error = []
      state.loading = action.status
      return state

    case TYPES.FETCH_SESSION_ID:
      state.sessionId = action.data
      state.loading = false
      return state

    case TYPES.FETCH_SENDER_HASH:
      state.senderHash = action.data
      state.loading = false
      return state

    case TYPES.PAYMENT_CREATE:
      state.loading = false
      return state

    default:
      return state
  }
}

export default reducer
