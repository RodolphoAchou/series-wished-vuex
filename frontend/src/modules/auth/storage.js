import { setBearerToken } from '@/http'

export const setHearderToken = token => setBearerToken(token)
export const getLocalToken = token => localStorage.getItem('token')
export const deleteLocalToken = token => localStorage.removeItem('token')
export const setLocalToken = token => localStorage.setItem('token', token)
