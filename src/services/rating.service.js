import http from '../config/http'
const baseUrl = '/rating'

export const createRatingService = (data) => http.post(`${baseUrl}`, data)