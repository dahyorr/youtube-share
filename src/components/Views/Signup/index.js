import React, {useState} from 'react'
import SignupForm from '../../forms/SignupForm'
import Index from '../../Loader'
import '../../../styles/Auth.scss'
import { Link } from 'react-router-dom'
import {useAuth} from '../../../hooks'

const Signup = () => {
    const {signUp} = useAuth()
    const [loading, setloading] = useState(false)
    const [error, setError] = useState("")

    const onSubmit = async (values) => {
        setError("")
        setloading(true)
        try{
            await signUp(values.email, values.password)
        }
        catch(err){
            switch(err.code){
                case "auth/email-already-in-use":
                    setError('This email Already exists')
                    break;
                default:
                    setError('An Error has occurred')
                    break;
            }
        }
        setloading(false)
    }


    return (
        <>
        <div className="Auth">
            <div className="content">
                <h2 className="title">Sign Up</h2>
                <div className="form-container">
                    {error && <p className="error">{error}</p>}
                    <SignupForm 
                    onSubmit={onSubmit}
                    setError={setError} 
                    title="Sign Up"
                    />
                    <p className="form-info">Have an account ?, <Link to="/login">Sign In</Link></p>
                </div>
            </div>
        </div>
        {loading && <Index/>}
        </>
    )
}

export default Signup
