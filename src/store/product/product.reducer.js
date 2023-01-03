import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  productById: []
}

const reducer = ({ ...state } = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.PRODUCT_LOADING:
      state.error = []
      state.loading = action.status
      return state

    case TYPES.PRODUCT_ALL:
      state.all = action.data
      state.loading = false
      return state

    case TYPES.PRODUCT_BY_ID:
      state.productById = action.data
      state.loading = false
      return state

    case TYPES.PRODUCT_CREATE:
      state.loading = false
      return state

    case TYPES.PRODUCT_UPDATE:
      state.productById = action.data
      state.loading = false
      return state

    case TYPES.PRODUCT_REMOVE:
      state.loading = false
      return state

    case TYPES.PRODUCT_EDIT:
      state.productById = action.data
      state.loading = false
      return state

    default:
      return state
  }
}

export default reducer
