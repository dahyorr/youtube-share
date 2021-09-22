import React from 'react'
import {useAuth} from '../hooks'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, path, ...props}) => {
    const {user} = useAuth()
    return (
        <Route 
        path={path} 
        {...props}
        render={props => {
            return user 
            ? <Component {...props}/>
            : <Redirect to="/login"/>
        }} 
        />
    )
}

export default PrivateRoute
