import TYPES from '../types'
import {
  listByIdClientService,
  updateClientService
} from '../../services/client.service'
import http from '~/config/http'
import { toastr } from 'react-redux-toastr'
import { saveAuth } from '~/config/auth'
import { authService } from '~/services/auth.service'

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
