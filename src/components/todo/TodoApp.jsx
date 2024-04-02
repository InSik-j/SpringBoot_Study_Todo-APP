import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import LogoutComponent from './LogoutComponent'
//import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'
import './TodoApp.css'

function AuthenticationRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated)
        return children
    
    return <Navigate to="/" />
    
}
export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}/>
                        <Route path='/login' element={<LoginComponent/>}/>
                        
                        <Route path='/welcome/:username' element={<AuthenticationRoute>
                                                                      <WelcomeComponent/>
                                                                  </AuthenticationRoute>}/>
                        <Route path="/todos" element={<AuthenticationRoute>
                                                          <ListTodosComponent/>
                                                      </AuthenticationRoute>}/>
                        <Route path="/todo/:id" element={<AuthenticationRoute>
                                                          <TodoComponent/>
                                                      </AuthenticationRoute>}/>
                        <Route path="/logout" element={<AuthenticationRoute>
                                                           <LogoutComponent/>
                                                       </AuthenticationRoute>}/>
                        
                        <Route path='/*' element={<ErrorComponent/>}/>

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}














