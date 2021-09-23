import React, {useState} from 'react'
import {Input, Button} from 'antd'
import './Form.scss'

const LoginForm = ({onSubmit}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        onSubmit({email, password})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input 
                type="email" 
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

            <Button type="primary" block htmlType="submit" >
                Login
            </Button>
        </form>
    )
}

export default LoginForm
