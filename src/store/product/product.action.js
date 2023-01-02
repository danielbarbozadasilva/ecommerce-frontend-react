import TYPES from '../types'
import {
  listAllProductsService,
  listProductsService,
  listByIdProductService,
  searchProductsService,
  createProductService
} from '../../services/product.service'
import { toastr } from 'react-redux-toastr'

export const listAllProducts = (itensPerPage, currentPage) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await listAllProductsService(itensPerPage, currentPage)
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data[0].data })
    } catch (error) {}
  }
}

export const listProducts = (sortType) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await listProductsService(sortType)
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data })
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

export const createProduct = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      await createProductService(data)
      toastr.success('Produto', 'Criado com sucesso!')
      dispatch({ type: TYPES.PRODUCT_CREATE })
      dispatch(listProducts())
    } catch (error) {
      toastr.error('Erro', 'Erro ao inserir o produto')
    }
  }
}
