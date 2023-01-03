import { removeToken, saveAuth } from '../../config/auth'
import {
  authService,
  registerService,
  recoveryPasswordService,
  changePasswordService
} from '../../services/auth.service'
import http from '../../config/http'
import { navigate } from '@reach/router'
import { toastr } from 'react-redux-toastr'
import TYPES from '../types'

export const signInAction = async (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SIGN_LOADING, status: true })
    try {
      const result = await authService(data)
      if (result.data) {
        const { data } = result.data
        saveAuth(data)
        http.defaults.headers.token = data.token
        dispatch({ type: TYPES.SIGN_IN, data: data })
        if (data.userDTO.permissions === 'administrator') {
          navigate('/private/solicitations')
        } else {
          navigate('/')
        }
        toastr.success('Seja Bem-vindo(a)!', result.data.data.userDTO.name)
      }
    } catch (error) {
      const { data } = error.response
      toastr.error('Erro', data.message)
      dispatch({ type: TYPES.SIGN_ERROR, data: error })
    }
  }
}

export const signUpAction = async (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SIGN_LOADING, status: true })
    try {
      const result = await registerService(data)

      if (result.data.data) {
        const { data } = result.data
        saveAuth(data)
        http.defaults.headers.token = data.token
        dispatch({ type: TYPES.SIGN_IN, data: data })
        if (data.userDTO.permissions === 'administrator') {
          navigate('/private/solicitations')
        } else {
          navigate('/')
        }
      }
    } catch (error) {
      const { data } = error.response
      toastr.error('Erro', data.message)
      dispatch({ type: TYPES.SIGN_ERROR, data: error })
    }
  }
}

export const recoveryPasswordAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SIGN_LOADING, status: true })
    try {
      await recoveryPasswordService(data)
      navigate('/change-password')
      dispatch({ type: TYPES.SIGN_LOADING, status: false })
    } catch (error) {
      const { data } = error.response
      toastr.error('Erro', data.message)
      dispatch({ type: TYPES.SIGN_ERROR, data: error })
    }
  }
}

export const changePasswordAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SIGN_LOADING, status: true })
    try {
      await changePasswordService(data)
      navigate('/signin')
      dispatch({ type: TYPES.SIGN_LOADING, status: false })
    } catch (error) {
      const { data } = error.response
      toastr.error('Erro', data.message)
      dispatch({ type: TYPES.SIGN_ERROR, data: error })
    }
  }
}

export const logoutAction = (data) => {
  return async (dispatch) => {
    removeToken()
    dispatch({ type: TYPES.SIGN_OUT })
    navigate('/')
  }
}
