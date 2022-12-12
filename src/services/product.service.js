import http from '../config/http'

export const listAllProductsService = () => http.get('/product')
export const searchProductsService = (search) => http.get(`/product/search/${search}`)

