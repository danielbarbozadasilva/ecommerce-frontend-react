import TYPES from '../types'
import {
  listAllProductsService,
  listByIdProductService,
  searchProductsService
} from '../../services/product.service'

export const listAllProducts = (itensPerPage, currentPage) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await listAllProductsService(itensPerPage, currentPage)
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data[0] })
    } catch (error) {}
  }
}

export const listByIdProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await listByIdProductService(id)
      dispatch({ type: TYPES.PRODUCT_BY_ID, data: result.data.data })
    } catch (error) {}
  }
}

export const searchProducts = (search, itemsPerPage, currentPage) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await searchProductsService(search, itemsPerPage, currentPage)
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data[0] })
    } catch (error) {}
  }
}
