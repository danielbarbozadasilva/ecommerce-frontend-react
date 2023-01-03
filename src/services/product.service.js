import http from '../config/http'
const baseUrl = '/product'

export const createProductService = (data) => http.post(`${baseUrl}`, data)
export const listByIdProductService = (id) => http.get(`${baseUrl}/${id}`)
export const updateProductService = (id, data) => http.put(`${baseUrl}/${id}`, data)
export const removeProductService = (id) => http.delete(`${baseUrl}/${id}`)
export const listAllProductsService = (itemsPerPage, currentPage) =>
  http.get(`${baseUrl}?itemsPerPage=${itemsPerPage}&page=${currentPage}`)
export const listProductsService = (sortType) =>
  http.get(`${baseUrl}/dashboard?sortType=${sortType}`)
export const searchProductsService = (search, itemsPerPage, currentPage) =>
  http.get(`${baseUrl}/search/${search}?itemsPerPage=${itemsPerPage}&page=${currentPage}`)

