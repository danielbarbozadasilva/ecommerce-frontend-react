import http from '../config/http'

export const listByIdClientService = (clientid) =>
  http.get(`/client/${clientid}`)

export const updateClientService = (clientid, userid, data) =>
  http.put(`/client/${clientid}/user/${userid}`, data)
