import http from '../config/http'

export const getSessionPaymentService = () => http.get(`/payment/session`)

export const createPaymentService = (id, data) =>
  http.post(`/take/payment/${id}`, { senderHash: data })
