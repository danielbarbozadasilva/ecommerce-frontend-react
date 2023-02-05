import TYPES from '../types'
import {
  listAllProductsService,
  listProductsService,
  listByIdProductService,
  searchProductsService,
  createProductService,
  updateProductService,
  removeProductService
} from '../../services/product.service'
import { toastr } from 'react-redux-toastr'

export const listAllProducts = (itensPerPage, currentPage, sortType) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await listAllProductsService(itensPerPage, currentPage, sortType)
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data[0], sort: sortType })
    } catch (error) {}
  }
}

export const listProducts = (sortType) => {
  return async (dispatch) => {
    try {
      const result = await listProductsService(sortType)
      dispatch({ type: TYPES.PRODUCT_WITH_FILTER, data: result.data.data })
    } catch (error) {}
  }
}

export const listByIdProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await listByIdProductService(id)
      dispatch({ type: TYPES.PRODUCT_BY_ID, data: result.data.data })
      const { category } = result.data.data
      return category
    } catch (error) {}
  }
}

export const searchProducts = (search, itemsPerPage = 100, currentPage = 0) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      const result = await searchProductsService(
        search,
        itemsPerPage,
        currentPage
      )
      dispatch({ type: TYPES.PRODUCT_ALL, data: result.data.data[0].data })
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

export const editProduct = (id) => {
  return async (dispatch) => {
    try {
      const result = await listByIdProductService(id)
      dispatch({ type: TYPES.PRODUCT_EDIT, data: result.data.data })
    } catch (error) {}
  }
}

export const searchProductPortal = (search, itemsPerPage = 100, currentPage = 0) => {
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

export const updateProduct = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CATEGORY_LOADING, status: true })
    try {
      const result = await updateProductService(id, data)
      dispatch({ type: TYPES.PRODUCT_UPDATE, data: result.data.data })
      dispatch(listProducts())
    } catch (error) {}
  }
}

export const removeProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      await removeProductService(id)
      toastr.success('Produto', 'Excluído com sucesso!')
      dispatch({ type: TYPES.PRODUCT_REMOVE })
      dispatch(listProducts())
    } catch (error) {
      toastr.error('Erro', 'Erro ao excluir o produto')
    }
  }
}
