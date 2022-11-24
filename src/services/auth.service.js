import http from '../config/http'

export const authService = (data) => http.post('/auth', data)
export const registerService = (data) => http.post('/client', data)
export const recoveryPasswordService = (data) => http.put('/user/recovery/password-recovery', data)
export const changePasswordService = (data) => http.put('/user/recovery/reset-password', data)


