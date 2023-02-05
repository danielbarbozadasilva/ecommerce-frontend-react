import http from '../config/http'
const baseUrl = '/rating'

export const listAllRatingService = () => http.get(`${baseUrl}`)
export const createRatingService = (data) => http.post(`${baseUrl}`, data)
export const removeRatingService = (productid, clientid) =>
  http.delete(`${baseUrl}?clientid=${clientid}&productid=${productid}`)
