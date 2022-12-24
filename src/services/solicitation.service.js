import http from '../config/http'
const baseUrl = '/solicitation'

export const createSolicitationService = (clientid, data) =>
  http.post(`${baseUrl}?clientid=${clientid}`, data)
