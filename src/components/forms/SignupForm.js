import React, {useState} from 'react'
import {Input, Button} from 'antd'
import '../../styles/Form.scss'
import * as Yup from 'yup';

const SignupForm = ({onSubmit, title, setError}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const ValidationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6, "Pasword must be at least 6 characters"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        ValidationSchema.validate({email, password, confirmPassword})
            .then(values => {
                setError("")
                onSubmit(values)
            })
            .catch(err => setError(err.errors[0]))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input 
                type="text" 
                name="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input 
                type="password" 
                name="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Input 
                type="password" 
                name="confirmPassword" 
                id="confirmPassword" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            </div>

            <Button type="primary" block htmlType="submit" >
                {title}
            </Button>
        </form>
    )
}

export default SignupForm
