import TYPES from '../types'
import { toastr } from 'react-redux-toastr'
import {
  getSessionPaymentService,
  createPaymentService
} from '~/services/payment.service'
import { navigate } from '@reach/router'
import { cleanCartAction } from '../cart/cart.action'

export const createPayment = (id, senderHash, paymentType) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PAYMENT_LOADING, status: true })
    try {
      const result = await createPaymentService(id, senderHash)
      dispatch({ type: TYPES.PAYMENT_CREATE })

      if (paymentType === 'BOLETO') {
        navigate('/payment/success', {
          state: { bankSlip: result.data }
        })
      } else {
        navigate('/payment-card/success')
      }

      dispatch(cleanCartAction())
      toastr.success('Pagamento', 'realizado com sucesso!')
    } catch (error) {
      toastr.error('Erro', 'Verifique os dados de pagamento')
      navigate('/payment/error')
    }
  }
}

export const getSessionPayment = () => {
  return async (dispatch) => {
    try {
      const result = await getSessionPaymentService()
      PagSeguroDirectPayment.setSessionId(result.data.sessionId)
      const senderHash = PagSeguroDirectPayment.getSenderHash()
      dispatch({
        type: TYPES.FETCH_SENDER_HASH,
        data: senderHash
      })
    } catch (error) {}
  }
}
