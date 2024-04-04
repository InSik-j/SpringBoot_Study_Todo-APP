import { apiClient } from "./ApiClient";

export const excuteBasicAuthenticationService 
    = (token) => apiClient.get(`/basicauth`,{
        headers: {
            Authorization: token
        }
    })

export const excuteJwtAuthenticationService 
    = (username, password) => 
        apiClient.post(`/authenticate`,{username, password})