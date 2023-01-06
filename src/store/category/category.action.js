import TYPES from '../types'
import {
  listAllCategoriesService,
  listCategoryByIdService,
  listProductCategoryByIdService,
  createCategoryService,
  removeCategoryService,
  updateCategoryService
} from '../../services/category.service'
import { toastr } from 'react-redux-toastr'

export const listAllCategories = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CATEGORY_LOADING, status: true })
    try {
      const result = await listAllCategoriesService()
      dispatch({ type: TYPES.CATEGORY_ALL, data: result.data.data })
    } catch (error) {}
  }
}

export const listProductCategoryById = (categoryid) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CATEGORY_LOADING, status: true })
    try {
      const result = await listProductCategoryByIdService(categoryid)
      dispatch({ type: TYPES.CATEGORY_PRODUCTS, data: result.data.data[0] })
    } catch (error) {}
  }
}

export const createCategory = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      await createCategoryService(data)
      toastr.success('Categoria', 'Criado com sucesso!')
      dispatch({ type: TYPES.CATEGORY_CREATE })
      dispatch(listAllCategories())
    } catch (error) {
      toastr.error('Erro', 'Erro ao inserir a categoria')
    }
  }
}

export const editCategory = (id) => {
  return async (dispatch) => {
    try {
      const result = await listCategoryByIdService(id)
      dispatch({ type: TYPES.CATEGORY_EDIT, data: result.data.data[0] })
    } catch (error) {}
  }
}

export const updateCategory = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CATEGORY_LOADING, status: true })
    try {
      const result = await updateCategoryService(id, data)
      dispatch({ type: TYPES.CATEGORY_UPDATE, data: result.data.data })
      dispatch(listAllCategories())
    } catch (error) {}
  }
}

export const removeCategory = (id) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.PRODUCT_LOADING, status: true })
    try {
      await removeCategoryService(id)
      toastr.success('Categoria', 'Excluída com sucesso!')
      dispatch({ type: TYPES.CATEGORY_REMOVE })
      dispatch(listAllCategories())
    } catch (error) {
      toastr.error('Erro', 'Erro ao excluir a categoria')
    }
  }
}
