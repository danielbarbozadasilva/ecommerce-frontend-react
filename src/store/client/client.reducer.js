import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  clientById: []
}

const reducer = ({ ...state } = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.CLIENT_LOADING:
      state.error = []
      state.loading = action.status
      return state

    case TYPES.CLIENT_ALL:
      state.all = action.data
      state.loading = false
      return state
      
    case TYPES.CLIENT_ID:
      state.clientById = action.data
      state.loading = false
      return state

    default:
      return state
  }
}

export default reducer
