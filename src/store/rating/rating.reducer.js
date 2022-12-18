import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: []
}

const reducer = ({ ...state } = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.RATING_LOADING:
      state.error = []
      state.loading = action.status
      return state
      
    case TYPES.RATING_CREATE:
      state.loading = false
      return state

    default:
      return state
  }
}

export default reducer
