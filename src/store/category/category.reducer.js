import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  categoryById: [],
  categoryProducts: []
}

const reducer = ({ ...state } = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CATEGORY_LOADING:
      state.error = []
      state.loading = action.status
      return state

    case TYPES.CATEGORY_ALL:
      state.all = action.data
      state.loading = false
      return state

    case TYPES.CATEGORY_PRODUCTS:
      state.categoryProducts = action.data
      state.loading = false
      return state

    case TYPES.CATEGORY_CREATE:
      state.loading = false
      return state

    case TYPES.CATEGORY_EDIT:
      state.categoryById = action.data
      state.loading = false
      return state

    case TYPES.CATEGORY_UPDATE:
      state.categoryById = action.data
      state.loading = false
      return state

    case TYPES.CATEGORY_REMOVE:
      state.loading = false
      return state

    default:
      return state
  }
}

export default reducer
