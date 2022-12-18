import TYPES from '../types'
import { createRatingService } from '../../services/rating.service'
import { toastr } from 'react-redux-toastr'

export const createRating = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.RATING_LOADING, status: true })
    try {
      await createRatingService(data)
      dispatch({ type: TYPES.RATING_CREATE })
      toastr.success('Avaliação', 'enviada com sucesso!')
    } catch (error) {
      const { data } = error.response
      toastr.error('Erro', data.message)
      dispatch({ type: TYPES.RATING_LOADING, status: false })
    }
  }
}
