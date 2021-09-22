import React from 'react'
import { useAuth } from '../../hooks'
import './Nav.scss'

const Nav = (props) => {
    const {user, signOut} = useAuth()

    return (
        <div className='Nav'>
            <div className="logo">Youtube Share</div>
            <div className="buttons">
                {
                user
                ?<button onClick={signOut}>Sign out</button>
                :(<>
                    <button>Sign in</button>
                    <button>Sign up</button>
                </>)
                }        
            </div>
        </div>
    )
}

export default Nav
