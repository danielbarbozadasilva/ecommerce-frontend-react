import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  categoryById: []
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
      
    case TYPES.CATEGORY_ID:
      state.categoryById = action.data
      state.loading = false
      return state

    default:
      return state
  }
}

export default reducer
