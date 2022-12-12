import TYPES from '../types'
import {
  listAllCategoriesService,
  listByIdCategoryService
} from '../../services/category.service'

export const listAllCategories = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CATEGORY_LOADING, status: true })
    try {
      const result = await listAllCategoriesService()
      dispatch({ type: TYPES.CATEGORY_ALL, data: result.data.data })
    } catch (error) {}
  }
}

export const listByIdCategory = (id) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.CATEGORY_LOADING, status: true })
    try {
      const result = await listByIdCategoryService(id)
      dispatch({ type: TYPES.CATEGORY_ID, data: result.data.data })
    } catch (error) {}
  }
}
