import React, {useState} from 'react'
import {Input, Button} from 'antd'
import './Form.scss'

const SignupForm = ({onSubmit}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({email, password, confirmPassword})
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
                Sign Up
            </Button>
        </form>
    )
}

export default SignupForm
