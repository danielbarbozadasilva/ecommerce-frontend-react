import TYPES from '../types'
import { toastr } from 'react-redux-toastr'
import { getUser } from '../../config/auth'
import { createSolicitationService } from '../../services/solicitation.service'
import { navigate } from '@reach/router'

export const createSolicitation = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SOLICITATION_LOADING, status: true })
    try {
      const clientid = getUser().clientid
      const result = await createSolicitationService(clientid, data)
      dispatch({ type: TYPES.SOLICITATION_CREATE })
      return result
    } catch (error) {
      toastr.error(
        'Erro',
        'Erro ao realizar o pedido! Por favor tente mais tarde.'
      )
      navigate('/payment/error')
    }
  }
}
