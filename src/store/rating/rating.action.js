import TYPES from '../types'
import { toastr } from 'react-redux-toastr'
import {
  listAllRatingService,
  createRatingService,
  removeRatingService
} from '../../services/rating.service'

export const listAllRatingAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.RATING_LOADING, status: true })
    try {
      const result = await listAllRatingService(data)
      dispatch({ type: TYPES.RATING_LIST_ALL, data: result.data.data })
    } catch (error) {}
  }
}

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

export const removeRatingAction = (productid, clientid) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.RATING_LOADING, status: true })
    try {
      await removeRatingService(productid, clientid)
      dispatch(listAllRatingAction())
      dispatch({ type: TYPES.RATING_REMOVE })
      toastr.success('Avaliação', 'removida com sucesso!')
    } catch (error) {}
  }
}
