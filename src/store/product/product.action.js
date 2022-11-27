import TYPES from '../types'
import { listAllProductsService } from '../../services/product.service'

export const listAllProducts = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await listAllProductsService(data)
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data })
    } catch (error) {}
  }
}
