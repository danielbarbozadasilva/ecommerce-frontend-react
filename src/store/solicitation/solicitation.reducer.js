import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  client: []

}

const reducer = ({ ...state } = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SOLICITATION_LOADING:
      state.error = []
      state.loading = action.status
      return state

    case TYPES.SOLICITATION_CREATE:
      state.loading = false
      return state

    case TYPES.SOLICITATION_ADMIN_LIST:
      state.all = action.data
      state.loading = false
      return state

    case TYPES.SOLICITATION_CLIENT_LIST:
      state.client = action.data
      state.loading = false
      return state

    default:
      return state
  }
}

export default reducer
