import TYPES from '../types'
import { toastr } from 'react-redux-toastr'
import {
  listAllClientService,
  listByIdClientService,
  updateClientService,
  removeClientService,
  searchClientService
} from '../../services/client.service'

export const listAllClientAction = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CLIENT_LOADING, status: true })
    try {
      const result = await listAllClientService()
      dispatch({ type: TYPES.CLIENT_ALL, data: result.data.data })
    } catch (error) {}
  }
}

export const searchClientAction = (search) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CLIENT_LOADING, status: true })
    try {
      const result = await searchClientService(search)
      dispatch({ type: TYPES.CLIENT_ALL, data: result.data.data })
    } catch (error) {}
  }
}

export const listByIdClientAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CLIENT_LOADING, status: true })
    try {
      const result = await listByIdClientService(id)
      dispatch({ type: TYPES.CLIENT_ID, data: result.data.data })
    } catch (error) {}
  }
}

export const updateClientProfileAction = (clientid, userid, data) => {
  return async (dispatch) => {
    try {
      const result = await updateClientService(clientid, userid, data)

      if (result.status === 200) {
        dispatch({
          type: TYPES.CLIENT_ID,
          data: data
        })

        toastr.success('Perfil atualizado com sucesso!')
      }
    } catch (error) {
      toastr.error('Erro ao atualizar o perfil!')
    }
  }
}

export const removeClientAction = (clientid) => {
  return async (dispatch) => {
    try {
      await removeClientService(clientid)
      dispatch(listAllClientAction())
      toastr.success('Cliente removido com sucesso!')
    } catch (error) {
      toastr.error('Erro ao remover o cliente!')
    }
  }
}
