import axios from 'axios'

// export function rereiveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const retreiveHelloWorldBean = ()=> apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable 
    = (username, token) => apiClient.get(`/hello-world/path-variable/${username}`, 
                                    {
                                        headers: {
                                                    Authorization: token
                                                }
                                    })

export const excuteBasicAuthenticationService 
    = (token) => apiClient.get(`/basicauth`,{
                                    headers: {
                                        Authorization: token
                                    }
                                })                                    