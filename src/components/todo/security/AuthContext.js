import { createContext, useContext, useState } from "react";
import { excuteBasicAuthenticationService, excuteJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";


// Context에 State 값을 저장하여 서로 다른 Component에서 State 공유
// 1 : context 생성
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// 2 : 생성된 컨텍스트를 다른 컴포넌트와 공유하기
export default function AuthProvider({ children }){
   
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    // function login(username, password){
    //     if(username==='in28minutes'&& password==='dummy'){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }else{          
    //         setAuthenticated(false)
    //         username(null)
    //         return false
    //     }
    // }

    // async function login(username, password){

    //     const baToken = 'Basic ' + window.btoa(username+":"+password)

    //     try{
    //         const response = await excuteBasicAuthenticationService(baToken)

    //         if(response.status==200){
    //             setAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)

    //             apiClient.interceptors.request.use(
    //                 (config) =>{
    //                     console.log('intercepting and adding a token')
    //                     config.headers.Authorization=baToken
    //                     return config
    //                 }
    //             )
    //             return true
    //         }else{          
    //             logout()
    //             return false
    //         }
    //     }catch(error){
    //         logout()
    //         return false
    //     }
    // }

    async function login(username, password){

        try{
            const response = await excuteJwtAuthenticationService(username, password)

            if(response.status==200){
                const jwtToken = 'Bearer ' + response.data.token
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) =>{
                        console.log('intercepting and adding a token')
                        config.headers.Authorization=jwtToken
                        return config
                    }
                )
                return true
            }else{          
                logout()
                return false
            }
        }catch(error){
            logout()
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username, token} }>
            {children}
        </AuthContext.Provider>
    )
}