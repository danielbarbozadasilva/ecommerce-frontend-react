import http from '../config/http'
const baseUrl = '/product'

export const listAllProductsService = (itemsPerPage, currentPage) =>
  http.get(`${baseUrl}?itemsPerPage=${itemsPerPage}&page=${currentPage}`)
export const listByIdProductService = (id) => http.get(`${baseUrl}/${id}`)
export const searchProductsService = (search, itemsPerPage, currentPage) =>
  http.get(
    `${baseUrl}/search/${search}?itemsPerPage=${itemsPerPage}&page=${currentPage}`
  )
