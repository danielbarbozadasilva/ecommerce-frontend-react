import http from '../config/http'

export const listAllProductsService = (data) => http.get('/product', data)


