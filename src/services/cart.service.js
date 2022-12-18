import http from '../config/http'

export const listByIdProductService = (id) => http.get(`/product/${id}`)
export const calculatePriceDeliveryService = (zipCode, cart) =>
  http.post(`/delivery/calculate`, { zipCode, cart })
