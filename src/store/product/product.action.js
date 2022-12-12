import TYPES from '../types'
import {
  listAllProductsService,
  searchProductsService
} from '../../services/product.service'

export const listAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await listAllProductsService()
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data })
    } catch (error) {}
  }
}

export const searchProducts = (search) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await searchProductsService(search)
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data })
    } catch (error) {}
  }
}
