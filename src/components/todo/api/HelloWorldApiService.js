import { apiClient } from './ApiClient'
// export function rereiveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

export const retreiveHelloWorldBean = ()=> apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable 
    = (username, token) => apiClient.get(`/hello-world/path-variable/${username}`
    // , 
    //                                 {
    //                                     headers: {
    //                                                 Authorization: token
    //                                             }
    //                                 }
                                    )
