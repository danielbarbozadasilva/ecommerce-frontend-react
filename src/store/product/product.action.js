import TYPES from '../types'
import {
  listAllProductsService,
  listByIdProductService,
  searchProductsService,
  uploadImageProductService,
  createProductService
} from '../../services/product.service'

export const listAllProducts = (itensPerPage, currentPage) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await listAllProductsService(itensPerPage, currentPage)
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data[0].data })
    } catch (error) {}
  }
}

export const listByIdProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await listByIdProductService(id)
      dispatch({ type: TYPES.PRODUCT_BY_ID, data: result.data.data })
      return result.data.data
    } catch (error) {}
  }
}

export const searchProducts = (search, itemsPerPage, currentPage) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await searchProductsService(
        search,
        itemsPerPage,
        currentPage
      )
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data[0] })
    } catch (error) {}
  }
}

export const uploadImageProduct = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await uploadImageProductService(id, data)
      // dispatch({ type: TYPES.PRODUCT_UPLOAD_IMAGE, data: result.data.data })
      // return result.data.data
    } catch (error) {}
  }
}

export const createProduct = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const formData = new FormData()
      Object.keys(data).map((k) => formData.append(k, data[k]))
      const result = await createProductService(formData)
      //console.log(result.data.id)
      // dispatch({ type: TYPES.PRODUCT_UPLOAD_IMAGE, data: result.data.data })
      // return result.data.data
    } catch (error) {}
  }
}
