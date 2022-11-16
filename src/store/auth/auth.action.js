import { removeToken } from '../../config/auth'
import http from '../../config/http'
import { navigate } from '@reach/router'
import { toastr } from 'react-redux-toastr'
import TYPES from '../types'

export const logoutAction = (data) => {
  return async (dispatch) => {
    removeToken()
    dispatch({ type: TYPES.SIGN_OUT })
    navigate('/')
  }
}
