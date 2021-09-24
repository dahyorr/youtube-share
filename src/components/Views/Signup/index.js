import React, {useState} from 'react'
import SignupForm from '../../forms/SignupForm'
import Loader from '../../Loader'
import '../../../styles/shared/Auth.scss'
import { Link } from 'react-router-dom'
import {useAuth} from '../../../hooks'
import * as Yup from 'yup';
import {validate} from '../../../helpers/utils'

const ValidationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6, "Pasword must be at least 6 characters"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const Signup = ({history}) => {
    const {signUp} = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const onSubmit = async (data) => {
        setError("")
        setLoading(true)
        try{
            const values = await validate(ValidationSchema, data)
            await signUp(values.email, values.password)
            setLoading(false)
            history.push('/')
        }
        catch(err){
            setLoading(false)
            if(err.name === "ValidationError"){
                setError(err.errors[0])
                return;
            }
            switch(err.code){
                case "auth/email-already-in-use":
                    setError('This email Already exists')
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
                <h2 className="title">Sign Up</h2>
                <div className="form-container">
                    {error && <p className="error" title={'error'}>{error}</p>}
                    <SignupForm 
                    onSubmit={onSubmit}
                    setError={setError} 
                    />
                    <p className="form-info">Have an account ?, <Link to="/login">Sign In</Link></p>
                </div>
            </div>
        </div>
        {loading && <Loader/>}
        </>
    )
}

export default Signup
