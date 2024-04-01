import { createContext, useContext, useState } from "react";

// Context에 State 값을 저장하여 서로 다른 Component에서 State 공유
// 1 : context 생성
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// 2 : 생성된 컨텍스트를 다른 컴포넌트와 공유하기
export default function AuthProvider({ children }){
   
    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password){
        if(username==='in28minutes'&& password==='dummy'){
            setAuthenticated(true)
            return true
        }else{          
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}