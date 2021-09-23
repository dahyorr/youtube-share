import React, {useState} from 'react'
import LoginForm from '../../forms/LoginForm'
import Loader from '../../Loader'
import '../../../styles/shared/Auth.scss'
import { Link } from 'react-router-dom'
import {useAuth} from '../../../hooks'
import * as Yup from 'yup';
import {validate} from '../../../helpers/utils'

const ValidationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

const Login = ({history, ...props}) => {
    const {logIn} = useAuth()
    const [loading, setloading] = useState(false)
    const [error, setError] = useState("")

    const onSubmit = async (data) => {
        setError("")
        setloading(true)
        try{
            const values = await validate(ValidationSchema, data)
            await logIn(values.email, values.password)
            setloading(false)
            history.push('/')
        }
        catch(err){
            setloading(false)
            if(err.name === "ValidationError"){
                setError(err.errors[0])
                return;
            }
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
                    {error && <p className="error" title='error'>{error}</p>}
                    <LoginForm 
                    onSubmit={onSubmit} 
                    />
                    <p className="form-info">Dont have an account ?, <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
        {loading && <Loader/>}
        </>
    )
}

export default Login
