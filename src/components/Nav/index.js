import React from 'react'
import { useAuth } from '../../hooks'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import './Nav.scss'

const Nav = (props) => {
    const {user, signOut} = useAuth()
    return (
        <div className='Nav'>
            <Link to="/" style={{color: 'black'}}><div className="logo">Youtube Share</div></Link>
            <div className="buttons">
                {
                user
                ?<Button onClick={signOut} title="sign-out" type="link">Sign Out</Button>
                :(<>
                    <Link to="/login" title='sign-in'>
                        <Button type="link" >Sign In</Button>
                    </Link>
                    <Link to="/signup" title='sign-up'>
                        <Button type="link">Sign Up</Button>
                    </Link>
                </>)
                }        
            </div>
        </div>
    )
}

export default Nav
