import http from '../config/http'

export const listAllCategoriesService = () => http.get('/category')
export const listByIdCategoryService = (categoryid, itemsPerPage, currentPage) =>
  http.get(`/category/${categoryid}/products?itemsPerPage=${itemsPerPage}&page=${currentPage}`)
