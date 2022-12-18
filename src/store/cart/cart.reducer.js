import { getCart } from '~/util/cart'
import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: getCart() || null,
  shipping: null
}

const reducer = ({ ...state } = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_LOADING:
      state.error = []
      state.loading = action.status
      return state

    case TYPES.GET_CART:
      state.all = action.data
      state.loading = false
      return state

    case TYPES.FETCH_PRICE_DELIVERY:
      state.shipping = action.data
      state.loading = false
      return state

    case TYPES.REMOVE_PROD_CART:
      state.all = state.all.reduce(
        (all, item, index) =>
          index !== action.cartId ? all.concat([item]) : all,
        []
      )
      return state

    default:
      return state
  }
}

export default reducer
