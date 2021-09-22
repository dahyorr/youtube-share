import React, {useState} from 'react'
import LoginForm from '../forms/LoginForm'
import Index from '../Loader'
import '../../styles/Auth.scss'
import { Link } from 'react-router-dom'
import {useAuth} from '../../hooks'

const Login = ({history, ...props}) => {
    const {logIn} = useAuth()
    const [loading, setloading] = useState(false)
    const [error, setError] = useState("")

    const onSubmit = async (values) => {
        setError("")
        setloading(true)
        try{
            await logIn(values.email, values.password)
            setloading(false)
            history.push('/')
        }
        catch(err){
            setloading(false)
            switch(err.code){
                case "auth/wrong-password":
                case "auth/user-not-found":
                    setError('Invalid Email/Password')
                    break;
                default:
                    setError('An Error has occurred')
                    break;
            }
        }
    }

    return (
        <>
        <div className="Auth">
            <div className="content">
                <h2 className="title">Login</h2>
                <div className="form-container">
                    {error && <p className="error">{error}</p>}
                    <LoginForm 
                    onSubmit={onSubmit} 
                    setError={setError} 
                    title="Login"
                    />
                    <p className="form-info">Dont have an account ?, <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
        {loading && <Index/>}
        </>
    )
}

export default Login
