import http from '../config/http'
const baseUrl = '/client'

export const listAllClientService = () => http.get(`${baseUrl}`)
export const listByIdClientService = (clientid) =>
  http.get(`${baseUrl}/${clientid}`)
export const removeClientService = (clientid) =>
  http.delete(`${baseUrl}/${clientid}`)
export const updateClientService = (clientid, userid, data) =>
  http.put(`${baseUrl}/${clientid}/user/${userid}`, data)
export const searchClientService = (search = ' ') =>
  http.get(`${baseUrl}/search?find=${search}`)
