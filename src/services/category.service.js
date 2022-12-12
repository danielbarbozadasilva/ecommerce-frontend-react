import http from '../config/http'

export const listAllCategoriesService = () => http.get('/category')
export const listByIdCategoryService = (categoryid) =>
  http.get(`/category/${categoryid}/products`)
