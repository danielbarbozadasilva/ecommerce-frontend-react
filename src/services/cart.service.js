import http from '../config/http'

export const calculatePriceDeliveryService = (zipCode, cart) =>
  http.post(`/delivery/calculate`, { zipCode, cart })
