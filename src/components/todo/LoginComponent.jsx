import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './security/AuthContext'

function LoginComponent(){

    const [username, setUsername] =useState('in28minutes')
    const [password, setPassword] =useState('')

    const [showErrorMessage, setShowErrorMessage] =useState(false)

    const AuthContext = useAuth()

    const navigate = useNavigate();

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(){
        if(AuthContext.login(username, password)){
            navigate(`/welcome/${username}`);
        }else{          
            setShowErrorMessage(true);
        }
    }

    return(
        <div className="Login">
            <h1>Time to Login</h1>
            {showErrorMessage && <div className='errorMessage'> Authentication Failed..</div>}
            <div className="LoginForm">
                <div>
                    <label>User name</label>
                    <input type="text" name="username" value={username}  onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password}  onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent