import http from '../config/http'
const baseUrl = '/category'

export const listAllCategoriesService = () => http.get(`${baseUrl}`)
export const listCategoryByIdService = (id) => http.get(`${baseUrl}/${id}`)
export const listProductCategoryByIdService = (categoryid, itemsPerPage, currentPage) =>
  http.get(`${baseUrl}/${categoryid}/products?itemsPerPage=${itemsPerPage}&page=${currentPage}`)
export const createCategoryService = (data) => http.post(`${baseUrl}`, data)
export const updateCategoryService = (id, data) => http.put(`${baseUrl}/${id}`, data)
export const removeCategoryService = (id) => http.delete(`${baseUrl}/${id}`)
