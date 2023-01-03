import http from '../config/http'
const baseUrl = '/solicitation'

export const createSolicitationService = (clientid, data) =>
  http.post(`${baseUrl}?clientid=${clientid}`, data)

export const listClientSolicitationsService = (clientid) =>
  http.get(`/client/${clientid}/solicitations`)

export const listAllSolicitationsService = () => http.get(`${baseUrl}`)
